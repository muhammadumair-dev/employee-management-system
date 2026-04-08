import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

function TaskList({ data }) {
  if (!data || !Array.isArray(data.tasks)) return null

  return (
    <div id='tasklist' className='sm:h-[55%] h-[45%] overflow-x-auto  flex flex-col sm:flex-row gap-2 justify-start sm:py-5 mt-5 sm:mt-10 sm:gap-5  sm:flex-nowrap' >
      {data.tasks.map((elem,idx) => {

        // console.log(elem);
        if (elem.active) {

          return <AcceptTask key={idx}  data={elem}/>

        }
        if (elem.newtask) {
          return <NewTask key={idx} data={elem} />

        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />

        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />

        }





      })}
    </div>
  )
}

export default TaskList