import React from 'react';
import { History } from '../../interfaces/History';
import HistoryRow from '../Rows/HistoryRow';


const CardTable: React.FC<{historyList: History[]}> = ({ historyList }) => {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          "bg-gray-700 text-white"
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  "text-white"
                }
              >
                History
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      "bg-gray-600 text-gray-200 border-gray-500"
                  }
                >
                  Date
                </th>
                <th
                  className={
                    "px-6 align- text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
                   "bg-gray-600 text-gray-200 border-gray-500"
                  }
                >
                  Results
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +

                      "bg-gray-600 text-gray-200 border-gray-500"
                  }
                >
                  Enter
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-gray-600 text-gray-200 border-gray-500"
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {historyList.sort(sort).map(history => (
                <HistoryRow key={history.date} history={history}/>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const sort = (a: History,b: History) => {
  const boolean = (new Date(a.date).getTime() - new Date(b.date).getTime()) >= 0
  console.log(a.date, b.date,  boolean)
  return boolean ? 1 : -1
}
export default CardTable;
