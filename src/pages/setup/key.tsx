import { getAuth } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { database } from '../../lib/firebase/clientApp';


const Key: React.FC = () => {
  const router = useRouter()
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)
  const [companyId, setCompanyId] = useState("")

  useEffect(() => {
    if(!user) return
    console.log(user.uid)
    const uid = user.uid
    setCompanyId(uid)
  }, [user])



  return (
    <div className="h-screen py-2 px-5 overflow-x-auto relative bg-gray-600">
      <div className="relative bg-gray-800 text-white w-full px-5 py-5 rounded shadow">
        <h1 className='font-bold text-center text-xl mb-10'>PRODUCT ACTIVATION</h1>

        <div className='my-5 w-full flex row justify-center items-center'>
          <label>Serial Number</label>
          <input className='text-sm  bg-gray-700 text-right rounded ml-5 py-1 px-2' />
        </div>

        <div className='my-5 w-full flex row justify-center items-center'>
          <label>Activation Key</label>
          <input className='text-sm bg-gray-700 text-right rounded ml-5 py-1 px-2' />
        </div>

        <div className='my-10 w-full flex row justify-around items-center'>
          <button onClick={() => router.back()} className="mx-5 w-full max-w-md text-black bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm  px-5 py-2 my-1  focus:outline-none">Cancel</button>
          <button className="mx-5 w-full max-w-md  text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 my-1  focus:outline-none">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Key;
