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
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='font-semibold text-3xl'>{props.data ? props.data.firstName : 'Admin'}👋</span> </h1>
        <button onClick={logout} className='bg-red-600 px-5 py-2 text-lg  font-medium rounded-sm' >Log Out</button>
          {/* <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeDashboard data={IogediUuserData} />: null)}
  </> */}
        </div>
        
  )
}

export default Header