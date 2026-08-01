import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../Coontext/AuthProvide'

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      taskTitle,
      taskDate,
      assignTo,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    const updatedEmployees = userData.employees.map((employee) => {
  if (employee.firstName === assignTo) {
    return {
      ...employee,
      tasks: [...employee.tasks, newTask],
      taskCount: {
        ...employee.taskCount,
        newTask: employee.taskCount.newTask + 1,
      },
    }
  }

  return employee
})

setUserData({
  ...userData,
  employees: updatedEmployees,
})

localStorage.setItem(
  'employees',
  JSON.stringify(updatedEmployees)
)

    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')
  }

  return (
    <div className="mt-8 bg-[#1c1c1c] rounded-lg p-6">
      <form
        onSubmit={submitHandler}
        className="flex justify-between items-start gap-12"
      >
        <div className="w-1/2 flex flex-col gap-6">
          <div>
            <h3 className="text-gray-300 text-sm mb-2">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 text-white placeholder:text-gray-500 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-2">Date</h3>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 text-white outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-2">Assign to</h3>
            <input
              type="text"
              placeholder="employee name"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 text-white placeholder:text-gray-500 outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <h3 className="text-gray-300 text-sm mb-2">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent border border-gray-500 rounded-md px-3 py-2 text-white placeholder:text-gray-500 outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <h3 className="text-gray-300 text-sm mb-2">Description</h3>

          <textarea
            rows="8"
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-transparent border border-gray-500 rounded-md p-3 text-white placeholder:text-gray-500 outline-none resize-none focus:border-emerald-500"
          />

          <button
            type="submit"
            className="w-full mt-5 bg-emerald-500 hover:bg-emerald-600 duration-300 text-white font-semibold py-3 rounded-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask