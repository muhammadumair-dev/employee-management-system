import React from 'react'

function TaskNUmber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-500'>
            <h2 className='text-3xl font-semibold'> {data.taskCount.newtask}</h2>
<h3 className='text-xl font-medium'> New Task</h3>
        </div>
         <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-500'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
<h3 className='text-xl font-medium'>completed</h3>
        </div>
         <div className='rounded-xl w-[45%] py-6 px-9 bg-green-500'>
            <h2 className='text-3xl font-semibold'> {data.taskCount.active}</h2>
<h3 className='text-xl font-medium'> Accepted task</h3>
        </div>
         <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-500'>
            <h2 className='text-3xl font-semibold'> {data.taskCount.failed}</h2>
<h3 className='text-xl font-medium'> failed Task</h3>
        </div>

    </div>
  )
}

export default TaskNUmber