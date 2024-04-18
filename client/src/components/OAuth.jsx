import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase';
import {useDispatch} from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import { baseurl } from '../pages/Profile';

export const OAuth = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleGoogleClick=async()=>{
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const res = await axios.post(`${baseurl}/api/auth/google`, 
                {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }
            );
            const data = await res.data;
            dispatch(signInSuccess(data));
            navigate('/');
        }catch(error){
            console.log("could not login with google",error);
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
        continue withe google
    </button>
  )
}
