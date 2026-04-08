import React, { useState } from 'react'
import Login from '../Auth/Login'

function Header(props) {
// const [username, setusername] = useState('')
// if (!data) {
//   setusername('Admin')
// }
// else{
//   setusername(data.firstName)
// }c


const logout = ()=>{
  localStorage.removeItem('loggeninuser')
props.change('')
}
  return (
    <div className='flex sm:items-end items-center justify-between text-white'>
        <h1 className='sm:text-2xl text-[21px] leading-7  font-medium'>Hello <br /><span className='font-semibold sm:text-3xl text-[28px]'>{props.data ? props.data.firstName : 'Admin'}👋</span> </h1>
        <button onClick={logout} className='bg-red-600 sm:px-5 px-2  py-2 sm:text-lg   font-medium rounded-sm' >Log Out</button>
          {/* <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeDashboard data={IogediUuserData} />: null)}
  </> */}
        </div>
        
  )
}

export default Header