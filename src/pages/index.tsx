import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { default as React, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactLoading from 'react-loading';


const MainPage: React.FC = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if(!user) {
      router.push("/login")
      return;
    }

  }, [user])

  if(isLoading || loading) return (
    <div className="h-screen py-2 px-5 overflow-x-auto flex justify-center items-center center relative bg-gray-600">
       <ReactLoading type="cylon" color="white" height={100} width={100} />
    </div>
  )

  return (
    <>
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            "bg-gray-700 text-white"
          }
        >
          < div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  "text-white"
                }
              >
                Graphs
              </h3>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}


export default MainPage;
