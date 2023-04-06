import { getAuth } from 'firebase/auth'
import type { AppProps } from 'next/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import CarbonoDataContextProvider from '../hooks/contexts/CarbonoDataContext'
import Admin from '../layouts/Admin'
import { createFirebaseApp } from '../lib/firebase/clientApp'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  createFirebaseApp()
  const auth = getAuth()
  const [user] = useAuthState(auth)


  return (
    <CarbonoDataContextProvider>
      {user ?
          <Admin>
            <Component {...pageProps} />
          </Admin>
        : <Component {...pageProps} />
      }
    </CarbonoDataContextProvider>
  )
}

export default MyApp
