import React, { useContext } from 'react'
import { AuthContext } from '../../../Coontext/AuthProvide'

const AcceptTask = ({ data, index, employee }) => {
  const { userData, setUserData } = useContext(AuthContext)

  const markCompleted = () => {
    const employees = [...userData.employees]

    const emp = employees.find((e) => e.id === employee.id)

    if (emp) {
      emp.tasks[index].active = false
      emp.tasks[index].newTask = false
      emp.tasks[index].completed = true
      emp.tasks[index].failed = false

      emp.taskCount.active--
      emp.taskCount.completed++
    }

    setUserData({
      ...userData,
      employees,
    })

    localStorage.setItem('employees', JSON.stringify(employees))
  }

  const markFailed = () => {
    const employees = [...userData.employees]

    const emp = employees.find((e) => e.id === employee.id)

    if (emp) {
      emp.tasks[index].active = false
      emp.tasks[index].newTask = false
      emp.tasks[index].completed = false
      emp.tasks[index].failed = true

      emp.taskCount.active--
      emp.taskCount.failed++
    }

    setUserData({
      ...userData,
      employees,
    })

    localStorage.setItem('employees', JSON.stringify(employees))
  }

  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>
          {data.category}
        </h3>

        <h4 className='text-sm'>
          {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-5 text-2xl font-bold'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-3'>
        {data.description}
      </p>

      <div className='flex justify-between mt-4'>
        <button
          onClick={markCompleted}
          className='bg-green-500 py-1 px-2 text-sm rounded'
        >
          Mark as Completed
        </button>

        <button
          onClick={markFailed}
          className='bg-red-700 py-1 px-2 text-sm rounded'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask