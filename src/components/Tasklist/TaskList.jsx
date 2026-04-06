import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

function TaskList({ data }) {
  if (!data || !Array.isArray(data.tasks)) return null

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex justify-start py-5 mt-10 gap-5 flex-nowrap' >
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