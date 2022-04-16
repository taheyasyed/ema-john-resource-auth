import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css"

const Login = () => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const navigate = useNavigate()



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    
    const handleEmailblur = event =>{
        setEmail(event.target.value);
  } 
  const handlePassblur = event =>{
       setPass(event.target.value)
  }
  
  if(user){
    navigate('/');
}

  const handleuserSignin = event =>{
      event.PreventDefault(); 
      signInWithEmailAndPassword(email,pass);
  }
    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleuserSignin} action=''>
            <div className='input-group'>
                <label htmlFor='email'>Email</label><br></br>
                <input onBlur= {handleEmailblur} type="email" name='email' id='email' required></input>
            </div>
            <div className='input-group'>
                <label htmlFor='password'>Password</label><br></br>
                <input onBlur={handlePassblur} type="password" name='password' id='password' required></input>
            </div>
           <input className='form-submit' type="submit" value='Login'/>
            </form>
            <p>New to Ema-john?<Link to="/signup"> Create New Account</Link></p>
            </div>
            
        </div>
    );
};

export default Login;