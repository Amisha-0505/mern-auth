import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      setLoading(true);
      setError(false);
      const response=await fetch("http://localhost:3000/api/auth/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      });
    
      const data=await response.json();
      console.log(data);
      setLoading(false);
     if(data.success===false){
      setError(true);
      return;
     }
     navigate('/signin');
    }catch(err){
      setLoading(false);
      setError(true);
    }
  }
  //console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center py-7 font-semibold'>Sign-Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
        className='bg-slate-100 rounded-lg p-3' 
        type='text' 
        placeholder='Username' 
        id='username'
        onChange={handleChange} 
        />
        <input 
        className='bg-slate-100 rounded-lg p-3' 
        type='email' 
        placeholder='Email' 
        id='email'
        onChange={handleChange}
        />
        <input 
        className='bg-slate-100 rounded-lg p-3' 
        type='password' 
        placeholder='Password' 
        id='password'
        onChange={handleChange} 
        />
        <button 
          disabled={loading}
          className='uppercase bg-slate-800 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-70'>
         {loading?'Loading....':'sign-up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5 justify-center'>
        <p className=''>Have an account? </p>
        <Link to='/signin'>
          <span className='text-sky-500'>sign-in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'something wend wrong!'}</p>
    </div>
  )
}
