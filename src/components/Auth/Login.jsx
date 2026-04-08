import React, { useState } from 'react'

function Login({handleLogin}) {
  // console.log(hadleLogin);
  
    const [name, setName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    const Submit=(e)=>{
        e.preventDefault()
     handleLogin(name, email,password)
        setName('')
        setemail('')
        setpassword('')
    }
  return (
    <div className='flex flex-col bg-black overflow-x-hidden h-screen w-screen items-center justify-center'>
      <div className=' px-6 text-3xl sm:hidden'>Login</div>
      
      <div className='sm:border-2  sm:border-emerald-600  p-20'>
        
<form onSubmit={(e)=>{
Submit(e)
}} className='flex flex-col items-center gap-1.5 sm:gap-0 justify-center'>
    <input value={name}
    onChange={(e)=>{
        setName(e.target.value)
    }} type="text" className='outline-none text-white bg-transparent border-2 border-emerald-600 text-[15px] sm:text-xl  py-2.5 px-5 w-[180%]   sm:w-full rounded-full placeholder:text-gray-400 mb-3' placeholder='Enter Name ' />
    <input value={email}
    onChange={(e)=>{
        setemail(e.target.value)
    }} required type="email" className='outline-none text-white bg-transparent border-2 border-emerald-600 text-[15px] sm:text-xl  py-2.5 px-5 w-[180%]   sm:w-full rounded-full placeholder:text-gray-400 mb-3' placeholder='Enter Email ' />
    <input required type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='outline-none text-white bg-transparent sm:w-full border-2 border-emerald-600 text-[15px] sm:text-xl  py-2.5 px-5 w-[180%]  rounded-full placeholder:text-gray-400 mb-3' placeholder='Enter Password' />
<button className='text-white outline-none  bg-emerald-600 text-[15px] sm:text-xl py-3 px-5 rounded-full w-[180%] mt-2 sm:mt-7 sm:w-full '> login</button>
</form>
      </div>
    </div>
  )
}

export default Login
