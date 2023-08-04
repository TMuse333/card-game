import React, { useState } from 'react';
import Axios from 'axios';


const InputBar = () => {
    const [username, setUserName] = useState('');

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    }
    
    const submitReview = () => {
        console.log(username)

        if (username.trim() === '') {
            alert("Please enter a valid username.");
            return;
        }

        Axios.post("http://localhost:5174/api/insert", {
            username: username
        })
        .then(() => {
            alert("Data inserted successfully");
        })
        .catch((error) => {
            console.error("Error inserting data:", error); 
        });
    }

    return (
        <div className="name-input">
            <label htmlFor="name">Enter Your Name: </label>
            <input
                type="text"
                id="name"
                value={username}
                onChange={handleNameChange}
            />
            <p>Hello, {username || 'Stranger'}!</p>

            <button onClick={submitReview}>
                Submit!
            </button>
        </div>
    );
}

export default InputBar;
