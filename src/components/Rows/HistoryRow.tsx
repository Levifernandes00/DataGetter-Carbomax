import React from 'react';
import { History } from '../../interfaces/History';
import TableDropdown from '../Dropdowns/TableDorpdown';

// import { Container } from './styles';
type Props = {
  history: History
}

const HistoryRow: React.FC<Props> = ({history}) => {
  return (
    <tr className='border-b-2 border-gray-500'>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0  whitespace-nowrap p-4 text-left flex items-center">
        <span
          className={
            "ml-3 font-bold " +
            + "text-white"
          }
        >
          {history.date}
        </span>
      </th>

      <td>
        <div className='row flex justify-center'>
          <span className='text-white bg-gray-900 p-1 m-1'>TL: {history.results.tl} </span>
          <span className='text-white bg-gray-900 p-1 m-1'>CE: {history.results.ce} </span>
        </div>
        {history.mode === 'MICROSTRUCTURE' && <div className='row flex justify-center'>
          <span className='text-white bg-gray-900 p-1 m-1'>TEU: {history.results.teu} </span>
          <span className='text-white bg-gray-900 p-1 m-1'>TER: {history.results.ter} </span>
          <span className='text-white bg-gray-900 p-1 m-1'>REC: {history.results.rec} </span>
        </div>}
        {history.mode !== 'MICROSTRUCTURE' && <div className='row flex justify-center'>
          <span className='text-white bg-gray-900 p-1 m-1'>TS: {history.results.ts} </span>
          <span className='text-white bg-gray-900 p-1 m-1'>C: {history.results.c} </span>
          <span className='text-white bg-gray-900 p-1 m-1'>Si: {history.results.c} </span>
        </div>}

      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
        <TableDropdown />
      </td>
    </tr>
  )
}

export default HistoryRow;
