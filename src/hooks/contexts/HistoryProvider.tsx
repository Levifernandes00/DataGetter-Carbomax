import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { History } from '../../interfaces/History';

type ContextProps = {
  historyList: History[]
  setHistoryList: Dispatch<SetStateAction<History[]>>
}

export const HistoryContext = createContext<ContextProps>({ historyList: [], setHistoryList: () => { } });


const HistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [historyList, setHistoryList] = useState<History[]>([])
  return <HistoryContext.Provider value={{historyList, setHistoryList}} >{children}</HistoryContext.Provider>;
}

export default HistoryProvider;

export const useHistoryContext = (): ContextProps => useContext(HistoryContext)
