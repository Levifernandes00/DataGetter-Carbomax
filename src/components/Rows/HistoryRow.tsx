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
        <span>
          <div>{history.results.tl} </div>
          <div>{history.results.ce} </div>
        </span>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
        <TableDropdown />
      </td>
    </tr>
  )
}

export default HistoryRow;
