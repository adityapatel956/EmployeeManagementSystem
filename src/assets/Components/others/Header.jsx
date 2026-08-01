import React from 'react'

const Header = ({ data, changeUser }) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>
          {data ? data.firstName : 'Admin'} 🤝
        </span>
      </h1>

      <button
        onClick={logoutUser}
        className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-b-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header