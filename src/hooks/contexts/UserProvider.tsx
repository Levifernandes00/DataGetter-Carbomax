import React, { createContext, useContext, useEffect } from 'react';

import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import cookie from 'js-cookie';
import { useAuthState } from 'react-firebase-hooks/auth';

type ContextProps = {
  user: User | null | undefined
  loading: boolean
}

export const UserContext = createContext<ContextProps>({user: null, loading: false});

const tokenName = 'firebaseToken';

type Props = {
  children: JSX.Element
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const auth = getAuth()
  const [user, loading] = useAuthState(auth)

  // Checks that user state has changed and then creates or destroys cookie with Firebase token.
  const onAuthStateChange = () => {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        cookie.set(tokenName, token, { expires: 14 });
      } else {
        cookie.remove(tokenName);
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={{user, loading}}>{children}</UserContext.Provider>;
};


export const useUserContext = (): ContextProps => useContext(UserContext)


export function logout() {
  const auth = getAuth()
  return signOut(auth)
}


export default UserProvider;
