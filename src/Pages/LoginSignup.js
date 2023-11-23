import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { Link } from 'react-router-dom';
import { registerUser } from '../Components/Utils/Api';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = async () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      
      const userData = await registerUser({ username: name, email, password });
      window.alert('User registered successfully');
      console.log('User Data:', userData); 
    } catch (error) {
      console.error('Error registering user:', error);
      window.alert('Error registering user');
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleContinue}>Continue</button>
        
        <p className='loginsignup-forgot-password'>
          Forgot your password? <Link to='/forgot-password'>Reset it here</Link>
        </p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
