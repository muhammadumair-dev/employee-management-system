import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function Createtask() {
    const [userData, setuserData] = useContext(AuthContext)

    const [title, settitle] = useState('')
    const [Description, setDescription] = useState('')
    const [Date, setDate] = useState('')
    const [Asign, setAsign] = useState('')
    const [Category, setCategory] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        if (!userData) return

        const newTaskObj = {
            title,
            date: Date,
            category: Category,
            description: Description,
            active: false,
            newtask: true,
            failed: false,
            completed: false,
        }

        const updatedUsers = userData.map((elem) => {
            if (Asign === elem.firstName) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTaskObj],
                    taskCount: {
                        ...elem.taskCount,
                        newtask: (elem.taskCount.newtask || 0) + 1,
                    },
                }
            }
            return elem
        })

        const found = updatedUsers.some((elem) => elem.firstName === Asign)
        if (!found) {
            alert('Employee not found. Please check the name.')
            return
        }

        setuserData(updatedUsers)

        settitle('')
        setDate('')
        setDescription('')
        setAsign('')
        setCategory('')
    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e) => {
                SubmitHandler(e)
            }} className='flex flex-wrap items-start justify-between w-full' >
                <div className='w-1/2' >
                    <div className='text-sm text-gray-300 mb-0.5' >  <h3>
                        Task Title
                    </h3>
                        <input value={title}
                            onChange={(e) => {
                                settitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4' type="text" placeholder='Make a UI Desgin' /></div>

                    <div>            <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
                        <input value={Date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4' type="date" /></div>
                    <div> <h3 className='text-sm text-gray-300 mb-0.5' >Asing to</h3>
                        <input value={Asign}
                            onChange={(e) => {
                                setAsign(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4' type="text" placeholder='employee name ' /></div>
                    <div>  <h3 className='text-sm text-gray-300 mb-0.5' >Category</h3>
                        <input value={Category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4 ' type="text" placeholder='design , dev , etc' /></div>
                </div>
                {/*  */}
                <div className='w-1/2 flex flex-col items-start'><h3 className='text-sm text-gray-300 mb-0.5' >Descripton</h3>
                    <textarea value={Description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        className='text-sm py-2 h-44 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] w-full border-gray-400' name="" id="" cols="30" rows="10" ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button></div>
            </form>
        </div>
    )
}

export default Createtask