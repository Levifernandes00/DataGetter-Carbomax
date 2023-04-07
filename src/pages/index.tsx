import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useUserContext } from '../hooks/contexts/UserProvider';

// import { Container } from './styles';

const MainPage: React.FC = () => {
  const router = useRouter()
  const {user} = useUserContext()

  useEffect(() => {
    if(!user) {
      router.push("/login")
      return;
    }
    router.push(`/companies/${user.uid}/dashboard`)
  }, [user])

  return  <div className="h-screen py-2 px-5 overflow-x-auto flex justify-center items-center center relative bg-gray-600">
    <ReactLoading type="cylon" color="white" height={100} width={100} />
  </div>
}

export default MainPage;
