import React from 'react'

function AcceptTask({data}) { 
  
  return (
   <div className='h-full w-[300px] bg-amber-400 rounded-xl p-5 flex-shrink-0'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h2 className='text-sm'>{data.date}</h2>


            </div>
            <h2 className=' mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2' >{data.description}</p>
            <div className='flex justify-between mt-4'>
              <button className='bg-green-500 py-1 px-2 text-sm'>Mark as complted</button>
              <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
            </div>
             </div>
  )
}

export default AcceptTask
