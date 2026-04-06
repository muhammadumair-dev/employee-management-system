import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {
     const [userData,setuserData] = useContext(AuthContext)
     if (!userData) return null

  return (
    <div id='tasklist' className='mt-5 rounded bg-[#1c1c1c] p-5  '>
        <div className='flex justify-between rounded mb-2 bg-red-400 py-2 px-4'>
            <h2 className='text-lg font-medium w-1/5'>Employee</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            <h5 className='text-lg font-medium w-1/5'>New User</h5>
        </div>
       <div  className=''>
         {userData.map((elem)=>{
           return  <div className='flex justify-between rounded border-2 mb-2 border-emerald-500 py-2 px-4'>
            <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.newtask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-red-400'> {elem.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-pink-600'>{elem.taskCount.completed} </h5>
            <h5 className='text-lg font-medium w-1/5 text-amber-600'>{elem.taskCount.failed} </h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.newUser ? 'YES' : 'NO'}</h5>
        </div>

        })}
       </div>
       
        
    </div>
  )
}

export default AllTask