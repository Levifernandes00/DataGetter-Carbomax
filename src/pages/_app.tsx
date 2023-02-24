import type { AppProps } from 'next/app'
import CarbonoDataContextProvider from '../hooks/contexts/CarbonoDataContext'
import { createFirebaseApp } from '../lib/firebase/clientApp'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  createFirebaseApp()
  return (
    <CarbonoDataContextProvider>
      <Component {...pageProps} />
    </CarbonoDataContextProvider>
  )
}

export default MyApp
