import React, { useState, useEffect } from 'react';
import './RandomPassword.css';

function RandomPassword() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const data = "1234567890abcdefghijklmnopqrstuvwxyz";
    const length = 5;
    let value = '';
    
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * data.length);
      value += data[index];
    }
    
    setPassword(value);
  };

  useEffect(() => {
    generatePassword(); 
  }, []); 

  return (
    <div className='bodydiv'>
        <div className='main'>
        <div className='text'>
          <h1 className='heading'>Generate a</h1>
          <h1 className='heading' id='uppertext'>Random Password</h1>
        </div>
        <div>
          <input placeholder='Password' className='input' value={password} readOnly />
        </div>
        <button className='button' onClick={generatePassword}>Generate Password</button>
      </div>
    </div>
  );
}

export default RandomPassword;
