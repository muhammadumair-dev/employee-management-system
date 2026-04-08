import React from 'react'

function TaskNUmber({data}) {
  return (
    <div className='flex flex-wrap sm:flex-nowrap mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl  w-[45%] flex flex-col justify-center py-5 items-center  bg-red-500'>
            <h2 className='sm:text-3xl text-2xl font-semibold'> {data.taskCount.newtask}</h2>
<h3 className='sm:text-xl font-medium'> New Task</h3>
        </div>
         <div className='rounded-xl  w-[45%] flex flex-col justify-center items-center  py-5 bg-blue-500'>
            <h2 className='sm:text-3xl text-2xl font-semibold'>{data.taskCount.completed}</h2>
<h3 className='sm:text-xl font-medium'>completed</h3>
        </div>
         <div className='rounded-xl  w-[45%] flex flex-col justify-center items-center py-5 bg-green-500'>
            <h2 className='sm:text-3xl text-2xl font-semibold'> {data.taskCount.active}</h2>
<h3 className='sm:text-xl font-medium'> Accepted task</h3>
        </div>
         <div className='rounded-xl  w-[45%] flex flex-col justify-center items-center py-5 bg-yellow-500'>
            <h2 className='sm:text-3xl text-2xl font-semibold'> {data.taskCount.failed}</h2>
<h3 className='sm:text-xl font-medium'> failed Task</h3>
        </div>

    </div>
  )
}

export default TaskNUmber