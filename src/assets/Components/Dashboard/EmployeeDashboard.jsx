import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, changeUser }) => {
  if (!data) return null

  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
      <Header
        data={data}
        changeUser={changeUser}
      />

      <TaskNumber data={data} />

      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard