import React from 'react'

function CompleteTask({data}) {
  const cardStyle = data.color ? { backgroundColor: data.color } : undefined
  return (
  <div style={cardStyle} className='min-h-[160px] h-auto w-[100%] sm:w-[300px] bg-green-400 rounded-xl p-2 sm:p-5 flex-shrink-0'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 text-[10px] sm:text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h2 className='text-sm'>{data.date}</h2>
      </div>
     <div className='flex sm:hidden justify-between items-center'>  
         <h2 className=' mt-4 sm:mt-5 text-[20px] font-semibold'>{data.title}</h2>
          <div className='flex gap-2'>
                    <button className='bg-red-500 rounded px-1 py-2 text-[8px]'>Completed</button>
</div>
         </div>
      <p className='text-sm mt-2'>{data.description}</p>
       <div className='sm:inline hidden'>  
            <h2 className=' sm:mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2' >{data.description}</p></div>
      <div className='mt-2 sm:flex hidden'>
        <button className='py-1 px-5 rounded bg-red-500'>Completed</button>
      </div>
    </div>
  )
}

export default CompleteTask
//   <div className='sm:h-full  h-[130px] w-[100%] sm:w-[300px] bg-amber-400 rounded-xl p-2 sm:p-5 flex-shrink-0'>
//       <div className='flex justify-between items-center '>
//         <h3 className='bg-red-600 text-[10px] sm:text-sm px-3 py-1 rounded'>{data.category}</h3>
//         <h2 className='text-sm'>{data.date}</h2>


//       </div>
//       <div className='flex sm:hidden justify-between items-center'>  
//          <h2 className='mt-4 sm:mt-5 text-[20px] font-semibold'>{data.title}</h2>
//    <div className='flex gap-2'>
//         <button className='bg-green-500  rounded px-1 py-2 text-[8px]'>Mark as complted</button>
//         <button className='bg-red-500 rounded px-1 py-2 text-[8px]'>Mark as failed</button></div></div>
//              <p className='text-sm mt-2' >{data.description}</p>
//       <div className='sm:inline hidden'>  
//             <h2 className=' sm:mt-5 text-2xl font-semibold'>{data.title}</h2>
//         <p className='text-sm mt-2' >{data.description}</p></div>
//       <div className='sm:flex hidden justify-between mt-4'>
//         <button className='bg-green-500  rounded py-1 px-2 text-sm'>Mark as complted</button>
//         <button className='bg-red-500 rounded py-1 px-2 text-sm'>Mark as failed</button>
//       </div>
//     </div>