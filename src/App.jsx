import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [IogediUuserData, setlogediUuserData] = useState(null)
  const [userData,setuserData] = useContext(AuthContext)


 useEffect(() => {
   const loggedInUser = localStorage.getItem('loggeninuser') 
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)
setUser(userData.role)
setlogediUuserData(userData.data)    
    
  }
   
 

 }, [])

 useEffect(() => {
    if (user === 'employee' && userData && IogediUuserData) {
        const updatedEmployee = userData.find(e => e.id === IogediUuserData.id)
        if (updatedEmployee) {
            setlogediUuserData(updatedEmployee)
            localStorage.setItem('loggeninuser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
        }
    }
}, [userData])
 
  const handleLogin = (name, email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggeninuser', JSON.stringify({ role: 'admin' }))
      return
    }

    if (!userData) {
      alert('Employee data is still loading. Please refresh and try again.')
      return
    }

    const employee = userData.find((e) => email === e.email && password === e.password)

    if (employee) {
      setUser('employee')
      setlogediUuserData(employee)
      localStorage.setItem('loggeninuser', JSON.stringify({ role: 'employee', data: employee }))
      return
    }

    if (!name.trim()) {
      alert('Please enter your name to register as a new user.')
      return
    }

    const nextId = userData.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1
    const defaultTask = {
      title: "Welcome to your first task",
      description: "Start here by opening this new task and completing it.",
      date: new Date().toISOString().slice(0, 10),
      category: "Onboarding",
      active: true,
      newtask: true,
      completed: false,
      failed: false,
    }

    const newEmployee = {
      id: nextId,
      firstName: name.trim(),
      email,
      password,
      taskCount: {
        active: 1,
        newtask: 1,
        completed: 0,
        failed: 0,
      },
      tasks: [defaultTask],
      newUser: true,
    }

    const updatedUsers = [...userData, newEmployee]
    setuserData(updatedUsers)
    setUser('employee')
    setlogediUuserData(newEmployee)
    localStorage.setItem('loggeninuser', JSON.stringify({ role: 'employee', data: newEmployee }))
    alert('New employee account created and logged in. Your default task is ready.')
  }

return (
  <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard change={setUser} /> : (user == 'employee' ? <EmployeDashboard change={setUser} data={IogediUuserData} />: null)}
  </>
)
}

export default App