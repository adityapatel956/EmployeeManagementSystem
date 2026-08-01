import React, { useContext } from 'react'
import { AuthContext } from '../../../Coontext/AuthProvide'

const NewTask = ({ data, index, employee }) => {
  const { userData, setUserData } = useContext(AuthContext)

  const acceptTask = () => {
    const employees = [...userData.employees]

    const emp = employees.find((e) => e.id === employee.id)

    if (emp) {
      emp.tasks[index].newTask = false
      emp.tasks[index].active = true

      emp.taskCount.newTask--
      emp.taskCount.active++
    }

    setUserData({
      ...userData,
      employees,
    })

    localStorage.setItem('employees', JSON.stringify(employees))
  }

  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-blue-600 px-3 text-sm py-1 rounded'>
          {data.category}
        </h3>

        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-bold'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-3'>
        {data.taskDescription}
      </p>

      <div className='mt-4'>
        <button
          onClick={acceptTask}
          className='w-full bg-green-500 py-2 rounded text-sm font-medium'
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask