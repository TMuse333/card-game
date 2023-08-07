import React, { useEffect, useState, useCallback } from 'react';
import Axios from 'axios'


const Leaderboard = ({win,gameOver,selectedImage}) => {
    const [statsList, setStatsList] = useState([])
    const [showStats, setShowStats] = useState(false);

    useEffect(()=>{
        Axios.get("http://localhost:5174/api/get")
        .then((response)=>{
          setStatsList(response.data)
          console.log(response.data)
        })
    }, [])


    const toggleShowStats = () => {
        setShowStats(!showStats);
      };
      
      const toggleHideStats = () => {
        setShowStats(false);
      };

      const buttonStyle = {
        display: !gameOver && win === null ? 'none' :
        selectedImage !== null ? 'blur(5px)':  'block',
        // position: 'relative',
        // top: '-25rem',
        transform: "translateY(4.5rem)",
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'linear-gradient(to right, #6c4f55, #e42d0d)', // Add linear gradient
        padding: '10px 20px', // Add padding to give the button some space
        borderRadius: '5px',  // Add rounded corners
        color: 'white',      // Set text color to white
        border: 'none',      // Remove border
        cursor: 'pointer', 
        filter: selectedImage !== null ? 'blur(5px)' : null

        //transform: win === null ? 'translateY(-28rem)' : null 
        
      };

      const button2 = {
        display:  'block',
        transform: 'translateY(5rem)',
        fontSize: '20px',       // Adjust the font size to make the text smaller
        padding: '5px 10px',      // Adjust padding to reduce the button size
        borderRadius: '5px',      // Apply border radius for rounded corners
        background: 'linear-gradient(to right, #6c4f55, #e42d0d)', 
        border: 'none',          // Remove border
        cursor: 'pointer',  
        marginLeft: 'auto',
        marginRight: 'auto', 
        fontFamily: 'Roboto, sans-serif',    // Change cursor style to indicate interactivity
      };

      return (
        <>
          <button onClick={toggleShowStats} style={buttonStyle}>
            Leaderboard
          </button>
    
          {showStats && (
            <div className='popup-show-result'>
              <button onClick={toggleHideStats} style={button2}>
                Hide Leaderboard
              </button>
              <div className="player-score-header">
                <span className="player-header">Player</span>
                <span className="score-header">Score</span>
              </div>
              <div className="player-score-list">
                {statsList.map((val, index) => (
                  <div key={index} className="player-score-item">
                    <span className="player-name">{val.username}</span>
                    <span className="player-score">{val.score}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      );
    };
    
    export default Leaderboard;