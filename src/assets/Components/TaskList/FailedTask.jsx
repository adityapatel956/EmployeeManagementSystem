import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-500 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-700 px-3 text-sm py-1 rounded'>
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
        <button className='w-full bg-red-800 py-2 rounded text-sm'>
          Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask