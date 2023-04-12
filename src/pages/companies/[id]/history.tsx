
import React from 'react';
import CardTable from '../../../components/Cards/CardTable';
import { useHistoryContext } from '../../../hooks/contexts/HistoryProvider';




const HistoryPage: React.FC = () => {
  const {historyList} = useHistoryContext()

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


export default HistoryPage;
