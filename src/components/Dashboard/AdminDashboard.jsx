import React, { useContext } from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'
import AllTask from '../other/AllTask'


function AdminDashboard(props) {



 
    
    return (
        <div className='h-screen w-full  sm:p-7 p-3 '><Header  change={props.change}/>
           
<Createtask/>
<AllTask/>
        </div>
    )
}

export default AdminDashboard