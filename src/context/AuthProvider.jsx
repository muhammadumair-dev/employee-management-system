import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  // localStorage.clear()
    const [userData, setuserData] = useState(null)
useEffect(() => {
    const savedEmployees = localStorage.getItem('employess')
    const savedAdmin = localStorage.getItem('admin')

    if (!savedEmployees || !savedAdmin) {
        setLocalStorage()
    }

    const { employees } = getLocalStorage()
    setuserData(employees)
}, [])

useEffect(() => {
    if (userData) {
        localStorage.setItem('employess', JSON.stringify(userData))
    }
}, [userData])
  
    
  return (
    <AuthContext.Provider value={[userData,setuserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider