import React, { useEffect, useState, useCallback } from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp';
import Vegeta from '../images/vegeta-battle.png'
import saiyans from '../images/broly.jpg'
import Axios from 'axios'



const ResultScreen = ({ win, score, startClicked}) => {
  const [statsList, setStatsList] = useState([])
  const [showStats, setShowStats] = useState(false);

 
  useEffect(()=>{
    Axios.get("http://localhost:5174/api/get")
    .then((response)=>{
      setStatsList(response.data)
    })
}, [])

const toggleShowStats = () => {
  setShowStats(!showStats);
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
    display: win === null ? 'none' : 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }



  return (
    <>

    <button onClick={toggleShowStats}
   style={buttonStyle}>
      show stats slatt
    </button>
      <img src={ win && score > 100 ? saiyans : win && score < 101? clown : null} style={styles} alt="Result" />
    {/* <img src={showResult ? clown : null}
    style={styles}/> */}
      <div style={textStyle}>
        <p>{win && score > 100 && !showStats? ` Your score was ${score}` : score < 101 && win ? `Get your points up playa! You only scored ${score}` : null}</p>
        {win !== null && (
          <div className={showStats ? 'popup-show-result' : null}>
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