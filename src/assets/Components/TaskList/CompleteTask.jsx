import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-yellow-600 px-3 text-sm py-1 rounded'>
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

      <div className='mt-4'>
        <button className='w-full bg-green-600 py-2 rounded text-sm'>
          Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask