import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex w-full flex-nowrap overflow-x-auto items-center justify-start gap-5 py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              index={idx}
              employee={data}
            />
          )
        }

        if (elem.newTask) {
          return (
            <NewTask
              key={idx}
              data={elem}
              index={idx}
              employee={data}
            />
          )
        }

        if (elem.completed) {
          return (
            <CompleteTask
              key={idx}
              data={elem}
              index={idx}
              employee={data}
            />
          )
        }

        if (elem.failed) {
          return (
            <FailedTask
              key={idx}
              data={elem}
              index={idx}
              employee={data}
            />
          )
        }

        return null
      })}
    </div>
  )
}

export default TaskList