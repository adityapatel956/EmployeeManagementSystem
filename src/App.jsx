import React, { useContext, useEffect, useState } from 'react'
import Login from './assets/Components/Auth/Login'
import EmployeeDashboard from './assets/Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './assets/Components/Dashboard/AdminDashboard'
import { AuthContext } from './Coontext/AuthProvide'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedinUserDta, setloggedinuserDta] = useState(null)

  const { userData } = useContext(AuthContext)

  useEffect(() => {
    if (!userData) return

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    if (loggedInUser) {
      setUser(loggedInUser.role)

      if (loggedInUser.role === 'employee') {
        const employee = userData.employees.find(
          (e) => e.id === loggedInUser.id
        )

        setloggedinuserDta(employee)
      }
    }
  }, [userData])

  const handlelogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser('admin')

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'admin',
        })
      )
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      )

      if (employee) {
        setUser('employee')
        setloggedinuserDta(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            id: employee.id,
          })
        )
      } else {
        alert('INVALID CREDENTIALS')
      }
    }
  }

  if (!userData) return null

  return (
    <>
      {!user ? (
        <Login handlelogin={handlelogin} />
      ) : user === 'admin' ? (
        <AdminDashboard
          data={userData.admin}
          changeUser={setUser}
        />
      ) : (
        <EmployeeDashboard
          data={loggedinUserDta}
          changeUser={setUser}
        />
      )}
    </>
  )
}

export default App