import React from 'react'
import Header from '../other/Header'
import TaskNUmber from '../other/TaskNUmber'
import TaskList from '../Tasklist/TaskList'

function EmployeDashboard(props) {
  return (
    <div className='p-10 bg-[#1c1c1c]  h-screen'>
        <Header change={props.change}  data={props.data}/>
        <TaskNUmber data={props.data}/>
        <TaskList  data={props.data}/>
    </div>
  )
}

export default EmployeDashboard