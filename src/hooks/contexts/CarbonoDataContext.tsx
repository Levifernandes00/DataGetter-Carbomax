import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'

type CarbonoDataType = {
  TL: number
  TS: number
  Peak: number
  CE: number
  C: number
  Si: number
}

type CarbonoDataContextType = {
  data: CarbonoDataType
  setData: Dispatch<SetStateAction<CarbonoDataType>>
}

const initalData = { TL: 0, TS: 0, Peak: 0, CE: 0, C: 0, Si: 0 }

export const CarbonoDataContext = createContext<CarbonoDataContextType>({
  data: initalData,
  setData: () => { }
})

const CarbonoDataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState(initalData)

  return (
    <CarbonoDataContext.Provider value={{ data, setData }}>
      {children}
    </CarbonoDataContext.Provider>
  )
}

export default CarbonoDataContextProvider

export const useCarbonoDataContext = (): CarbonoDataContextType => useContext(CarbonoDataContext)
