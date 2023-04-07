import { getAuth } from 'firebase/auth'
import type { AppProps } from 'next/app'
import { useAuthState } from 'react-firebase-hooks/auth'
import UserProvider from '../hooks/contexts/UserProvider'
import Admin from '../layouts/Admin'
import { createFirebaseApp } from '../lib/firebase/clientApp'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  createFirebaseApp()
  const auth = getAuth()
  const [user] = useAuthState(auth)


  return (
    <UserProvider>
      { user ?
          <Admin>
            <Component {...pageProps} />
          </Admin>
        : <Component {...pageProps} />
      }
    </UserProvider>
  )
}

export default MyApp
