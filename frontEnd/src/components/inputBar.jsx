import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const InputBar = ({gameOver, win}) => {
    const [username, setUserName] = useState('');
    const [statsList, setStatsList] = useState([])

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    }

    // useEffect(()=>{
    //     Axios.get("http://localhost:5174/api/get")
    //     .then((response)=>{
    //       setStatsList(response.data)
    //     })
    // }, [])
    
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

    const styles = {
        display: !gameOver && win === null ?
         'none' : win !== null ? 'none' :'block'
    }

    return (
        <div className="name-input"
        style={styles}>
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

            {/* {statsList.map((val)=>{
                return <h1>username: {val.username} | score : {val.score}</h1>
            })} */}

        </div>
    );
}

export default InputBar;
