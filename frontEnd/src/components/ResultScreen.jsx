import React, { useEffect, useState, useCallback } from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp';
import Vegeta from '../images/vegeta-battle.png'
import saiyans from '../images/broly.jpg'
import Axios from 'axios'



const ResultScreen = ({ win, score, startClicked}) => {
  const [statsList, setStatsList] = useState([])
  const [showStats, setShowStats] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screenWidth when the window is resized
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 
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




  const styles = {
    display: win === null ? 'none' : 'block',
    height: '70vw',
    width: '50vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3rem',
    zIndex: 50,
    animation: win && score <=100 && !startClicked? 'moveAndScaleClown 1.5s infinite ease' : 'scaleUp 1.5s ease',
    transition: ' transform 1s ease',

  };

  const textStyle = {
    fontFamily: 'Bangers, cursive',
    background: 'linear-gradient(45deg, #ff0000, #ff6f00, #ffd700, #ff0000)',
    backgroundSize: '400% 400%',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    animation:!startClicked ? 'animateGradient 10s linear infinite' : null,
    width: 'fit-content',
    
    fontSize: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const dataStyle = {
    fontFamily: 'Roboto, sans-serif',
    display: !showStats ? 'none' : 'block',
    fontSize: '1rem',
    color: 'black',
    background: 'grey',
   // background: 'linear-gradient(45deg, #ff00ff, #33cc33, #0000ff)',
    backgroundSize: '200% 200%',
   /// borderRadius: '10px',
    width: '80%',
    height: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: 'translateY(10rem)',
    //animation: 'animateGradient 10s linear infinite',
    paddingTop: '5px'
  };
  
  const buttonStyle = {
    // display:  'block',
    position: 'relative',
    top: '-25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'linear-gradient(to right, #6c4f55, #e42d0d)', // Add linear gradient
    padding: '10px 20px', // Add padding to give the button some space
    borderRadius: '5px',  // Add rounded corners
    color: 'white',      // Set text color to white
    border: 'none',      // Remove border
    cursor: 'pointer', 
    //transform: win === null ? 'translateY(-28rem)' : null 
    
  };
  

  const button2 = {
    display:  'block',
    transform: 'translateY(9rem)',
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


  const resultContainerStyle = {
    height: '500px', // Set the desired fixed height
    overflow: 'auto', // Enable scrolling when content overflows
  };



  return (
    <>

    <button onClick={toggleShowStats}
   style={buttonStyle}>
      Leaderboard
    </button>
      <img src={ win && score > 100 ? saiyans : win && score < 101? clown : null} style={styles} alt="Result" />
    
      <div style={textStyle}>
        <p>{win && score > 100 && !showStats? ` Your score was ${score}` : score < 101 && win ? `Get your points up playa! You only scored ${score}` : null}</p>
        {showStats &&( 
          

          
          <div className='popup-show-result' >
                 <button onClick={toggleHideStats} style={button2}>
          Hide Leaderboard
        </button>
          <div  className="player-score-header">
            <span className="player-header">Player
                </span>
            <span className="score-header">Score</span>
          </div>
          <div className="player-score-list">
            
            {statsList.map((val, index) => (
             
              <div key={index}  className="player-score-item">
                
                <span className="player-name">{val.username} 
               </span>
                <span className="player-score">{val.score}</span>
              </div>
            ))}
           
    
          </div>

     
         
        </div>
         
        
        
        )}
        
      </div>
    </>
  );
};

export default ResultScreen;
