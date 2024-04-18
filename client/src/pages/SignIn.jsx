import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice'
import {useDispatch,useSelector} from 'react-redux'
import { OAuth } from '../components/OAuth';
import axios from 'axios';
import { baseurl } from './Profile';

export default function SignIp() {
  const [formData, setFormData] = useState({});
  const {error,loading}=useSelector((state)=>state.user);
  const navigate=useNavigate();
  const disptach=useDispatch();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      disptach(signInStart());
      const response=await axios.post(`${baseurl}/api/auth/signin`, 
        {formData}
      );
    
      const data=await response.data;
      // console.log(data);
      if(data.success===false){
        disptach(signInFailure(data));
        return;
      }
      disptach(signInSuccess(data));
      navigate('/');
    }catch(err){
      disptach(signInFailure(err));
    }
  }
  //console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center py-7 font-semibold'>Sign-In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
         {loading?'Loading....':'sign-in'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5 justify-center'>
        <p className=''>Don't have an account? </p>
        <Link to='/signup'>
          <span className='text-sky-500'>sign-up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error ? error.message || 'something wend wrong!':''}</p>
    </div>
  )
}

