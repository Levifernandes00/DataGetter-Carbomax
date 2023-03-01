import { getAuth, signOut } from 'firebase/auth';
import { get, onValue, ref, set } from 'firebase/database';
import { useRouter } from 'next/router';
import { default as React, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaDownload, FaSync } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import { database } from '../../lib/firebase/clientApp';


const dateSort = (aResults: String[], bResults: String[]) => {
  const aDate = new Date(aResults[0].split("-")[0])
  const bDate = new Date(bResults[0].split("-")[0])

  return aDate.getTime() - bDate.getTime();
}
const InstrumentPage: React.FC = () => {
  const router = useRouter()
  const [distributorId, setDistributorId] = useState("")
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const [results, setResults] = useState<String[][]>([])

  useEffect(() => {
    if(!user) {
      router.push("/login")
      return;
    }
    const distributorId = user?.uid
    setDistributorId(distributorId)
    const {company, instrument} = router.query


    const path = `distributors/${distributorId}/companies/${company}/${instrument}`

    sendLoadRequest(path)

    onValue(ref(database, path), (snapshot) => {
      const object = snapshot.val()
      setIsLoading(object.RES)
      if(object.HistIndex_dat === undefined) return
      loadData(object.HistIndex_dat)
    })

  }, [user])


  async function sendLoadRequest(path: string) {
    try {
      set(ref(database, path + "/REQ"), "GET /HistIndex.dat HTTP/1.1")
      console.log(`Loaded ${distributorId}`)

    } catch (error) {
      console.error(error)
    }
  }

  function loadData(data: String[]){
    const filteredData = data.filter((string) => string)
    const cleanData = getDataFromRows(filteredData)
    const stringResults = cleanData.filter(data => data !== " , , , , " && !data.includes("Historic") && data)
    const results = stringResults.map(result => result.split(","))
    setResults(results)
  }


  async function handlePasswordChange(value: string) {
    setPassword(value);
    if(value.length === 4 ) {
      if(checkPassword(value)) {
        try {
          set(ref(database, `distributors/${distributorId}/companies/GIOLA/CD_060/REQ`), "GET /dataparam.cgi?logon=" + value)
          router.push("/setup")
        } catch (error) {
          console.error(error)
        }
      }else{
        alert("Wrong password")
        setTimeout(() => setPassword(''), 100)
      }
    }
  }

  function checkPassword(value: string) {
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const calculus = (year - 2000 + month * 2).toString() + (month + (year - 2000 + month*2) - 5).toString()

    if(value === calculus) return true
    return false
  }

  async function downloadFile(date: string, saveNumber: string) {
    if(!saveNumber) return
    try {
      const snapshot = await get(ref(database, `distributors/${distributorId}/companies/GIOLA/CD_060/dadoshist_cgi_btrqh_${saveNumber}`))
      const rows = snapshot.val()
      if(!rows) throw Error("No file found")
      const data = getDataFromRows(snapshot.val())

      let csvContent = "data:text/csv;charset=utf-8," + data.map(r => r.replaceAll("\\r", '\r')).join("\n");
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `CD ${date}.csv`);
      document.body.appendChild(link); // Required for FF

      link.click();
    } catch (error) {
      alert(error)
      console.error(error)
    }
  }


  function updateHistory(saveNumber: string) {
    try {
      set(ref(database, `distributors/${distributorId}/companies/GIOLA/CD_060/REQ`), "GET /dadoshist.cgi?btrqh=" + saveNumber)
    } catch (error) {
      console.error(error)
    }
 }


  if(isLoading) return (
    <div className="h-screen py-2 px-5 overflow-x-auto flex justify-center items-center center relative bg-gray-600">
       <ReactLoading type="cylon" color="white" height={100} width={100} />
    </div>
  )

  return (
    <div className="h-screen py-2 px-5 overflow-x-auto relative bg-gray-600">
      <button className='bg-gray-900 float-right text-white px-2 py-1' onClick={() => signOut(auth)}>Logout</button>
       <div className="my-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">Access Password</label>
          <input value={password} onChange={(e) => handlePasswordChange(e.target.value)} type="password" id="password"  className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-slate-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
        </div>
        <table className="w-full text-sm text-left rounded-lg text-gray-400 ">
            <thead className="text-xs uppercase bg-gray-800 text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Date/Time
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Test Type
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Lot
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Material
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Save
                  </th>
                </tr>
            </thead>
            <tbody>
              {results.sort(dateSort).map(result => result.length === 5 && (
                <tr className=" border-b bg-gray-700 border-gray-700">
                  <th scope="row" className="py-4 px-6 font-medium  text-white">
                  {result[0]?.trim()}
                  </th>
                  <th scope="row" className="py-4 px-6 font-medium  text-white">
                  {result[1]?.trim()}
                  </th>
                  <th scope="row" className="py-4 px-6 font-medium  text-white">
                  {result[2]?.trim()}
                  </th>
                  <th scope="row" className="py-4 px-6 font-medium  text-white">
                  {result[3]?.trim()}
                  </th>
                  <td className="py-4 px-6 font-medium flex justify-around">
                    <button onClick={() => downloadFile(result[0]?.trim(), result[4]?.trim())} type="button" className="text-white bg-blue-500 hover:bg-blue-60 rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                      <FaDownload />
                    </button>
                    <button onClick={() => updateHistory(result[4]?.trim())} type="button" className="ml-2 text-green-500 bg-grey-500  hover:bg-blue-60 rounded-lg text-sm px-5 py-2.5 focus:outline-none">
                      <FaSync />
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
        </table>
    </div>
    )
}

function getDataFromRows(rows: String[]){
  var cleanData: String[] = []
  rows.forEach(row => {
    const splitLine = row.split("\\n")
    cleanData = [...cleanData, ...splitLine]
  })
  return cleanData
}

export default InstrumentPage;
