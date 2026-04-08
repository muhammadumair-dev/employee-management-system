import React from 'react'

function NewTask({ data }) {
  return (
    <div className='sm:h-full  h-[130px] w-[100%] sm:w-[300px] bg-purple-400-400 rounded-xl p-2 sm:p-5 flex-shrink-0'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h2 className='text-sm'>{data.date}</h2>
      </div>
     <div className='flex sm:hidden justify-between'>  
         <h2 className=' sm:mt-5 text-2xl font-semibold'>{data.title}</h2>
          <div className='flex gap-2'>
                    <button className='py-1 px-5 rounded bg-red-500'>New Task</button>
</div>
         </div>
      <p className='text-sm mt-2'>{data.description}</p>
       <div className='sm:inline hidden'>  
            <h2 className=' sm:mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2' >{data.description}</p></div>
      <div className='mt-2'>
        <button className='py-1 px-5 rounded bg-red-500'>New Task</button>
      </div>
    </div>
  )
}

export default NewTask
