import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {
     const [userData,setuserData] = useContext(AuthContext)
     if (!userData) return null

  return (
    <div id='tasklist' className='mt-5 rounded bg-[rgb(28,28,28)] sm:p-5  '>
        <div className='flex justify-between gap-2 sm:gap-0 items-center rounded mb-2 bg-red-400 py-2 px-1 sm:px-4'>
            <h2 className='text-[10px] sm:text-lg font-medium w-1/6'>Employee</h2>
            <h3 className='text-[10px] sm:text-lg font-medium w-1/6'>New Task</h3>
            <h5 className='text-[10px] sm:text-lg font-medium w-1/6'>Active</h5>
            <h5 className='text-[10px] sm:text-lg font-medium w-1/6'>Completed</h5>
            <h5 className='text-[10px] sm:text-lg font-medium w-1/6'>Failed</h5>
            <h5 className='text-[10px] sm:text-lg font-medium w-1/6'>Action</h5>
        </div>
       <div  className=''>
         {userData.map((elem)=>{
           return  <div key={elem.id} className='flex justify-between gap-2 sm:gap-0 items-center rounded border-2 mb-2 border-emerald-500 py-2 px-1 sm:px-4'>
            <h2 className='text-[10px] sm:text-lg  font-medium w-1/6 '>{elem.firstName}</h2>
            <h3 className='text-[10px] sm:text-lg  font-medium w-1/6 text-blue-600'>{elem.taskCount.newtask}</h3>
            <h5 className='text-[10px] sm:text-lg  font-medium w-1/6 text-red-400'> {elem.taskCount.active}</h5>
            <h5 className='text-[10px] sm:text-lg  font-medium w-1/6 text-pink-600'>{elem.taskCount.completed} </h5>
            <h5 className='text-[10px] sm:text-lg  font-medium w-1/6 text-amber-600'>{elem.taskCount.failed} </h5>
            <div className='text-[10px] sm:text-sm font-medium w-1/6'>
              {elem.newUser ? (
                <div className='flex flex-col gap-1'>
                  <button onClick={() => {
                    const updatedUsers = userData.map((user) => user.id === elem.id ? { ...user, newUser: false } : user)
                    setuserData(updatedUsers)
                  }} className='bg-emerald-500 text-black rounded px-2 py-1'>Accept</button>
                  <button onClick={() => {
                    const updatedUsers = userData.filter((user) => user.id !== elem.id)
                    setuserData(updatedUsers)
                  }} className='bg-red-500 text-black rounded px-2 py-1'>Cancel</button>
                </div>
              ) : (
                <span className='text-white'>Active</span>
              )}
            </div>
        </div>

        })}
       </div>
       
        
    </div>
  )
}

export default AllTask