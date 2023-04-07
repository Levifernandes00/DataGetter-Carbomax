
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import CardTable from '../../../components/Cards/CardTable';
import { History } from '../../../interfaces/History';
import admin from '../../../lib/firebase/nodeApp';


type Props = {
  historyList: History[]
}


const History: React.FC<Props> = ({ historyList }) => {

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable historyList={historyList} />
        </div>
      </div>
    </>
  );
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


export default History;
