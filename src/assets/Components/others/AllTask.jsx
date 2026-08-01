import React, { useContext } from 'react'
import { AuthContext } from '../../../Coontext/AuthProvide'

const AllTask = () => {
  const { userData } = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 h-48 mt-5 overflow-auto'>
      <div className='bg-red-400 text-lg font-medium mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
      </div>

      {userData.employees.map((elem, idx) => (
        <div
          key={idx}
          className='mb-2 py-2 px-4 flex justify-between rounded'
        >
          <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
          <h3 className='text-lg font-medium w-1/5 text-blue-800'>
            {elem.taskCount.newTask}
          </h3>
          <h5 className='text-lg font-medium w-1/5 text-yellow-400'>
            {elem.taskCount.active}
          </h5>
          <h5 className='text-lg font-medium w-1/5 text-white'>
            {elem.taskCount.completed}
          </h5>
          <h5 className='text-lg font-medium w-1/5 text-red-600'>
            {elem.taskCount.failed}
          </h5>
        </div>
      ))}
    </div>
  )
}

export default AllTask