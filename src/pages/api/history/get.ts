import { NextApiRequest, NextApiResponse } from "next";
import { History } from "../../../interfaces/History";
import admin from '../../../lib/firebase/nodeApp';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.headers)
  const { secret, companyid } = req.headers
  if(secret != process.env.NEXTAUTH_SECRET) return res.status(500).json({ message: "Invalid secret" })

  const bucket = admin.storage().bucket()
  console.log(companyid)
  var [files] = await bucket.getFiles({prefix: `CP/companies/${companyid}`})
  files = files.filter(file => file.name.includes(".txt"))

  const historyList: History[] = await Promise.all(files.map(async file => {
    const [,,companyId] = file.name.split("/")
    const content = await bucket.file(file.name).download()

    const [filename] = file.name.split("/").slice(-1)
    return getHistoryData(companyId, filename, content.toString())
  }))

  res.status(200).json({ historyList })
}

function getHistoryData(companyId: string, filename: string, content: string): History {
  const lines = content.split("\n")
  console.log(filename)
  const splitFilename = filename.replace(".txt", "").split("_")
  var [,,date, hour] = splitFilename

  if(hour === undefined) [,date, hour] = splitFilename

  const history: History = {
    company: companyId,
    date: `${date} ${hour}`,
    run: "",
    obs: "",
    material: "",
    mode: "",
    results: {
      peak: "",
      tl: "",
      ce: "",
      ef: ""
    },
    data: []
  }

  lines.forEach(line => {
    const splitLine = line.split(",")

    if (splitLine.length === 2) {
      if(line.includes("MODE")) history.mode = splitLine[1]
      if(line.includes("MATERIAL")) history.material = splitLine[1]
      if(line.includes("RUN")) history.run = splitLine[1]
      if(line.includes("OBS")) history.obs = splitLine[1]

    }

    if (splitLine.length === 3) {
      const [hour,temperature, derivative] = splitLine
      history.data?.push({hour, temperature, derivative})
    }

    if (splitLine.length === 5 && !line.includes("Date")) {
      const [hour,temperature, derivative] = splitLine
      history.data?.push({hour, temperature, derivative})

    }

    if (splitLine.length === 6 && !line.includes("PEAK")){
      const [peak, tl, ts, ce, c, si] = splitLine
      history.results = { peak, tl, ts, ce, c, si, ef: "" }
    }

    if (splitLine.length === 7 && !line.includes("PEAK")){
      const [peak, tl, x, y,,,ef] = splitLine
      const xHas1Decimal = x.match("^([1-9]\d*|0)(\.\d)?$")
      const xHas2Decimals = !xHas1Decimal

      const ce =  xHas2Decimals ? x : y

      history.results = { peak, tl, ce, ef }

      if(history.mode = "MICROSTRUCTURE"){
        const [,,,teu, ter, rec] = splitLine
        history.results = { teu, ter, rec, ...history.results }

      } else {
        const ts = xHas1Decimal ? x : y
        const [,,,, c, si] = splitLine
        history.results = { ts, c, si, ...history.results }
      }
    }

  })


  return history
}
