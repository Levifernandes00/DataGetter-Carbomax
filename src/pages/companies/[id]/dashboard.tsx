import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { default as React, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useHistoryContext } from '../../../hooks/contexts/HistoryProvider';
import { logout, useUserContext } from '../../../hooks/contexts/UserProvider';
import { History } from '../../../interfaces/History';
import admin from '../../../lib/firebase/nodeApp';

type Props = {
  historyList: History[]
}


const Dashboard: React.FC<Props> = ({ historyList }) => {
  const router = useRouter()
  const { user, loading } = useUserContext()
  const {setHistoryList} = useHistoryContext()

  useEffect(() => {
    setHistoryList(historyList)
  }, [historyList])

  useEffect(() => {
    if(!user) {
      router.push("/login")
      return;
    }

  }, [user])

  if(loading) return (
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
              <button className='bg-gray-700 float-right text-white px-2 py-1' onClick={() => logout()}>Logout</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id  = params?.id as string

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/history/get`, {
    headers: {
      companyid: id,
      secret: process.env.NEXTAUTH_SECRET || ""
    }
  })
  const { historyList } = await res.json()



  return {
    props: { historyList },
    revalidate: 84600
  }
}

export const getStaticPaths: GetStaticPaths = async() => {
  const { users } = await admin.auth().listUsers()
  const ids = users.map(user => user.uid)

  const paths = ids.map(id => ({ params: { id }}))

  return {
    paths,
    fallback: true
  }
}

export default Dashboard;
