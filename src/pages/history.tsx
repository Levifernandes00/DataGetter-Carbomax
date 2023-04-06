import React from 'react';
import CardTable from '../components/Cards/CardTable';

const History: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}


export default History;
