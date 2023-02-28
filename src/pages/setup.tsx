import { getAuth } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactLoading from 'react-loading';
import { database } from '../lib/firebase/clientApp';

const Setup: FC = () => {
  const router = useRouter()
  const [companyId, setCompanyId] = useState("")
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(!user) return
    const uid = user.uid
    setCompanyId(uid)
  }, [user])

  function sendRequest(number: number){
    switch(number){
      case 4: {
        exitSetupMode()
      }
      default: {
        set(ref(database, `companies/${companyId}/instrument/REQ`), "GET /dataparam.cgi?param=" + number)
      }
    }
  }

  function exitSetupMode() {
    try {
      setIsLoading(true)
      if(!companyId) throw Error("No user id found")
      set(ref(database, `companies/${companyId}/instrument/REQ`), "GET /dataparam.cgi?param=4")
      console.log("Exited")
      setTimeout(() => router.push("/"), 10000)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }


  function enterPage(pagename: string) {
    try {
      router.push("/setup" + pagename)
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
      <h2 className='text-center text-2xl text-white font-bold my-1'>SETUP MODE</h2>
      <table className="w-full text-sm text-left rounded-lg text-gray-400 ">
        <tbody>
          <tr  className="border-b bg-gray-800 border-gray-700">
            <th scope="row" className="py-4 px-6 text-lg text-center w-2/5  whitespace-nowrap text-white">
              Equipment Parameters
            </th>
            <td className="py-4 px-6 text-center">
              <button onClick={() => enterPage("/key")} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Activation key
              </button> <br />
              <button onClick={() => enterPage("/channel")} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1  my-1  focus:outline-none">
                Input channel
              </button>
            </td>
          </tr>
          <tr  className="border-b bg-gray-900 border-gray-700">
            <th scope="row" className="py-4 px-6 text-lg text-center w-2/5  whitespace-nowrap text-white">
              Calculation Parameters
            </th>
            <td className="py-4 px-6 text-center">
              <button onClick={() => enterPage("/table?number=1")}  className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Tellurium MINICUP - Carbon Mode
              </button> <br />
              <button  onClick={() => enterPage("/table?number=2")} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Tellurium CUP - Carbon Mode
              </button> <br />
              <button  onClick={() => enterPage("/table?number=3")} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                No Tellurium CUP - Microstructure Mode
              </button> <br />
              <button  onClick={() => enterPage("/table?number=4")} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Lance - Temperature Lance Mode
              </button>
            </td>
          </tr>
          {/* <tr  className="border-b bg-gray-800 border-gray-700">
            <th scope="row" className="py-4 px-6 text-lg text-center w-2/5  whitespace-nowrap text-white">
              Channel Calibration
            </th>
            <td className="py-4 px-6 text-center">
              <button onClick={() => enterPage("/CBD_Calib.html")} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Calibration
              </button>
            </td>
          </tr> */}
          <tr  className="border-b bg-gray-800 border-gray-700">
            <th scope="row" className="py-4 px-6 text-lg text-center w-2/5  whitespace-nowrap text-white">
              Import / Export <br />
              Equipment Data
            </th>
            <td className="py-4 px-6 text-center">
              <button onClick={() => sendRequest(1)}  className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Import Data
              </button> <br />
              <button onClick={() => sendRequest(2)}  className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Export Parameters
              </button> <br />
              <button onClick={() => sendRequest(3)}  className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Export Historic
              </button>
            </td>
          </tr>
          <tr  className="border-b bg-gray-900 border-gray-700">
            <th scope="row" className="py-4 px-6 text-lg text-center w-2/5  whitespace-nowrap text-white">
            </th>
            <td className="py-4 px-6 text-center">
              <button onClick={() => sendRequest(4)} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm w-full py-1 my-1  focus:outline-none">
                Exit Setup Mode
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Setup;
