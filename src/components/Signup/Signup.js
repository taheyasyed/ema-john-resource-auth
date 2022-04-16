import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [confirmpass,setConfirmpass] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailblur = event =>{
          setEmail(event.target.value);
    } 
    const handlePassblur = event =>{
         setPass(event.target.value)
    }
    const handleConfirmPassblur = event =>{
        setConfirmpass(event.target.value)
    }
    if(user){
        navigate('/');
    }
    const handleCreateuser = event => {
         event.preventDefault();
         if(pass!== confirmpass){
             setError('Your password didnt match')
             return;
         }
         createUserWithEmailAndPassword(email,pass);
    }

    return (
        <div className='form-container'>
            <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateuser} action=''>
            <div className='input-group'>
                <label htmlFor='email'>Email</label><br></br>
                <input onBlur= {handleEmailblur} type="email" name='email' id='email' required></input>
            </div>
            <div className='input-group'>
                <label htmlFor='password'>Password</label><br></br>
                <input onBlur={handlePassblur} type="password" name='password' id='password' required></input>
            </div>
            <div className='input-group'>
                <label htmlFor=' confirm password'> Confirm Password</label><br></br>
                <input onBlur={handleConfirmPassblur} type="password" name=' confirm password' id='password' required></input>
            </div>
            <p>{error}</p>
           <input  className='form-submit' type="submit" value='Sign Up'/>
            </form>
            <p>Already have an account?<Link to="/login">Login</Link></p>
            </div>
            
        </div>
    );
};

export default Signup;