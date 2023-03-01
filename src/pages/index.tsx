import { getAuth, signOut } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { useRouter } from 'next/router';
import { default as React, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactLoading from 'react-loading';
import { database } from '../lib/firebase/clientApp';


const MainPage: React.FC = () => {
  const router = useRouter()
  const [distributorId, setDistributorId] = useState("")
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const [companies, setCompanies] = useState<string[]>([])
  const [companyInstruments, setCompanyInstruments] = useState<{[company: string]: string[]}>({})

  useEffect(() => {
    if(!user) {
      router.push("/login")
      return;
    }
    const distributorId = user?.uid
    setDistributorId(distributorId)

    const path = `distributors/${distributorId}/companies/`


    onValue(ref(database, path), (snapshot) => {
      const object = snapshot.val()
      const companies = Object.keys(object)
      setCompanies(companies)
      companies.forEach(company => {
        setCompanyInstruments(obj => ({...obj, [company]: Object.keys(object[company])}))
      })
    })

  }, [user])

  function enterInstrument(company:string, instrument: string) {
    router.push(`/${company}/${instrument}`)
  }


  if(isLoading) return (
    <div className="h-screen py-2 px-5 overflow-x-auto flex justify-center items-center center relative bg-gray-600">
       <ReactLoading type="cylon" color="white" height={100} width={100} />
    </div>
  )

  return (
    <div className="h-screen py-5 px-5 overflow-x-auto relative bg-gray-600">
      <button className='bg-gray-700 float-right text-white px-2 py-1' onClick={() => signOut(auth)}>Logout</button>

        <table className="w-full mt-6 text-sm text-left rounded-lg text-gray-400 ">
            <thead className="text-xs uppercase bg-gray-900 text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Compan &gt; Instrument
                  </th>
                  <th scope="col" className="py-3 px-6 text-center">
                    Enter
                  </th>
                </tr>
            </thead>
            <tbody>
              {companies.map(company => (
                <>
                {companyInstruments[`${company}`].map(instrument => (
                  <tr key={instrument} className=" border-b bg-gray-700 border-gray-500">
                    <th scope="row" className="py-4 px-6  text-white">{company} &gt; {instrument}</th>
                    <td className="py-4 px-6 text-right">
                      <button onClick={() => enterInstrument(company, instrument)} type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2  focus:outline-none">Enter</button>
                    </td>
                  </tr>
                ))}
               </>
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

export default MainPage;
