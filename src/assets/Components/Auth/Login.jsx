import React, { useState } from 'react'

const Login = ({handlelogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submitHandler=(e)=>{
         e.preventDefault();
       handlelogin(email,password)
        setemail("")
        setpassword("")

    }
  


  return (
    <div className='flex h-screen gap-0.5  w-screen items-center justify-center'>
<div className='border-2 rounded-xl p-20  border-blue-400'>
      <form  onSubmit={(e)=>{
         submitHandler(e)
      }}
      className='flex flex-col items-center justify-center'>
        <input  value={email}
         onChange={(e)=>{
           setemail(e.target.value)
        }} 
        required

         className='text-white outline-none text-xl border-2 placeholder:text-gray-300 border-emerald-500 py-3 px-5 rounded-full'
         type='email' 
         placeholder='Enter your email'></input>
        <input value={password}
         onChange={(e)=>{
           setpassword(e.target.value)
        }}    
        required 
        className='text-white outline-none text-xl mt-4 border-2 placeholder:text-gray-300 border-emerald-500 py-3 px-5 rounded-full' 
         type='password'
          placeholder='Enter your password'></input>
        <button className='text-white bg-emerald-500 mt-5 outline-none text-xl border-2  placeholder:text-gray-300 border-emerald-500 py-3 px-5 rounded-full'>
            Submit
            </button>
      </form>
  </div>
    
    </div>
  )
}

export default Login