import React, { useState, useEffect } from 'react';

  

  const InputBar = () =>{
    const [userName, setUserName] = useState('');

    const handleNameChange = (event) => {
      setUserName(event.target.value);
    }
    
      const submitReview = () => {
    
    
  }

  return (


  <div className="name-input">
  <label htmlFor="name">Enter Your Name: </label>
  <input
    type="text"
    id="name"
    value={userName}
    onChange={handleNameChange}
  />
  <p>Hello, {userName || 'Stranger'}!</p>
</div>
  )}

  export default InputBar