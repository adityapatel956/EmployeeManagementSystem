import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({ data, changeUser }) => {
  return (
    <div className="min-h-screen w-full bg-[#111] p-7">
      <Header changeUser={changeUser} data={data} />

      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard