import React, { useState } from 'react';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import './LoginSignup.css';

const LoginSignup = () => {
const [action,setAction]=useState('Sign up');
  return (
    <div className='Container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action==="Login"? <div> </div>:<div className='input'>
          <img src={email_icon} alt='' />
          <input type='email'placeholder='Email' />
        </div>}
        <div className='input'>
          <img src={user_icon} alt='' />
          <input type='text' placeholder='Name' />
        </div>
        
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password'placeholder='Password' />
        </div>
      </div>
      {action==='Sign up'?<div></div>: <div className='forgot-password'>Lost Password ?<span>Click here !</span></div>}
     
      <div className='submit-container'>
      <div className={action==='Login'?'submit gray':'submit'}onClick={()=>{setAction("Sign up")}}>Sign up</div>
      <div className={action==='Sign up'?'submit gray':'submit'}onClick={()=>{setAction("Login")}}>Login up</div>  
      </div>
    </div>
  );
};

export default LoginSignup;
