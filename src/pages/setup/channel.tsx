import { getAuth } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { database } from '../../lib/firebase/clientApp';

const Channel: React.FC = () => {
  const router = useRouter()
  const [companyId, setCompanyId] = useState("")
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)


  useEffect(() => {
    if(!user) return
    console.log(user.uid)
    const uid = user.uid
    setCompanyId(uid)
    loadData(uid)
  }, [user])


  function loadData(companyId: string) {
    set(ref(database, `companies/${companyId}/instrument/REQ`), "/dadospar.cgi?Load=1_ HTTP/1.1")

  }

  function setData(){
    set(ref(database, `companies/${companyId}/instrument/REQ`), "/dadospar.cgi?1111112200000_")
  }

  return (
    <div className="h-screen py-2 px-5 overflow-x-auto relative bg-gray-600">
      <div className="relative bg-gray-800 text-white w-full px-5 py-5 rounded shadow">
        <h1 className='font-bold text-center text-xl mb-10'>INPUT CHANNEL</h1>
        <table className="w-full text-sm text-left rounded-lg text-gray-400 ">
            <thead className="text-xs uppercase bg-gray-900 text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6 text-center">
                      Channel
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                      Active
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                      Mode Type
                    </th>
                    <th scope="col" className="py-3 px-6 text-center">
                      Thermocouple Type
                    </th>
                </tr>
            </thead>
            <tbody>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-4 px-6">
                  1º
                </th>
                <td className="py-4 px-6">
                  <input id="Checkbox1" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                </td>
                <td className="py-4 px-4">
                  <select className="border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="Tellurium MINICUP" selected>Tellurium MINICUP</option>
                    <option value="Tellurium CUP">Tellurium CUP</option>
                    <option value="No Tellurium CUP">No Tellurium CUP</option>
                    <option value="Lance">Lance</option>
                  </select>
                </td>
                <td className="py-4 px-4">
                  <select className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="K" selected>K</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                  </select>
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-4 px-6">
                  2º
                </th>
                <td className="py-4 px-6">
                  <input id="Checkbox2" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                </td>
                <td className="py-4 px-4">
                  <select className="border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="Tellurium MINICUP" selected>Tellurium MINICUP</option>
                    <option value="Tellurium CUP">Tellurium CUP</option>
                    <option value="No Tellurium CUP">No Tellurium CUP</option>
                    <option value="Lance">Lance</option>
                  </select>
                </td>
                <td className="py-4 px-4">
                  <select className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="K" selected>K</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                  </select>
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-4 px-6">
                  3º
                </th>
                <td className="py-4 px-6">
                  <input id="Checkbox3" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                </td>
                <td className="py-4 px-4">
                  <select className="border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="Tellurium MINICUP" selected>Tellurium MINICUP</option>
                    <option value="Tellurium CUP">Tellurium CUP</option>
                    <option value="No Tellurium CUP">No Tellurium CUP</option>
                    <option value="Lance">Lance</option>
                  </select>
                </td>
                <td className="py-4 px-4">
                  <select className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="K" selected>K</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                  </select>
                </td>
              </tr>
              <tr  className=" border-b bg-gray-800 border-gray-700 text-white font-medium text-center">
                <th scope="row" className="py-4 px-6">
                  4º
                </th>
                <td className="py-4 px-6">
                  <input id="Checkbox4" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
                </td>
                <td className="py-4 px-4">
                  <select className="border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="Tellurium MINICUP" selected>Tellurium MINICUP</option>
                    <option value="Tellurium CUP">Tellurium CUP</option>
                    <option value="No Tellurium CUP">No Tellurium CUP</option>
                    <option value="Lance">Lance</option>
                  </select>
                </td>
                <td className="py-4 px-4">
                  <select className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                    <option value="K" selected>K</option>
                    <option value="R">R</option>
                    <option value="S">S</option>
                  </select>
                </td>
              </tr>
            </tbody>
        </table>
        <div className='w-full flex justify-center items-center my-5'>
          <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
          <label className='ml-5' htmlFor="checkbox">Simulation Mode</label>
        </div>
        <div className='my-10 w-full flex row justify-around items-center'>
          <button onClick={() => router.back()} className="mx-5 w-full max-w-md text-black bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm  px-5 py-2 my-1  focus:outline-none">Cancel</button>
          <button className="mx-5 w-full max-w-md  text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 my-1  focus:outline-none">Save</button>
        </div>

      </div>
    </div>
  );
}

export default Channel;
