import React from 'react';
import HeaderStats from '../components/Headers/HeaderStats';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Admin: React.FC<{children: JSX.Element}> = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-600 min-h-screen">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  )
}

export default Admin;
