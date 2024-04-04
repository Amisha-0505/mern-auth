import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center py-7 font-semibold'>Sign-Up</h1>
      <form className='flex flex-col gap-4'>
        <input className='bg-slate-100 rounded-lg p-3' type='text' placeholder='Username' id='username' />
        <input className='bg-slate-100 rounded-lg p-3' type='email' placeholder='Email' id='email' />
        <input className='bg-slate-100 rounded-lg p-3' type='password' placeholder='Password' id='password' />
        <button className='uppercase bg-slate-800 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-70'>sign-up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account? </p>
        <Link to='/signin'>
          <span className='text-sky-500'>sign-in</span>
        </Link>
      </div>
    </div>
  )
}
