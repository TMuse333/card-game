import React, { useEffect, useState, useCallback } from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp';
import Vegeta from '../images/vegeta-battle.png'
import saiyans from '../images/broly.jpg'
import Axios from 'axios'
import styled, { keyframes } from 'styled-components';


const ResultScreen = ({ win, score, startClicked}) => {
  const [statsList, setStatsList] = useState([])
  const [showStats, setShowStats] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log('Screen Width:', screenWidth);
    console.log('Screen Height:', screenHeight);
  }, [screenWidth, screenHeight]);





  const styles = {
    display: win === null ? 'none' : 'block',
    height: '70vw',
    width: '50vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3rem',
    zIndex: -5,
    animation: win && score <=100 && !startClicked? 'moveAndScaleClown 1.5s infinite ease' : 'scaleUp 1.5s ease',
    transition: ' transform 1s ease',
    maxHeight: '600px',
    maxWidth: '400px',
  //  position: 'relative'

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
    
   // fontSize: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',

    fontSize: screenWidth <= 320 ? '1.5rem' :
    screenWidth >= 1575 ? '5rem' : '2rem',
    marginTop: screenWidth >= 1575 ? '5rem' : '0.5rem'
    
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
    maxHeight: '300px',
    maxWidth: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: 'translateY(10rem)',
    //animation: 'animateGradient 10s linear infinite',
    paddingTop: '5px'
  };
  
  
  

 






  return (
    <>

  
      <img src={ win && score > 100 ? saiyans : win && score < 101? clown : null} style={styles} alt="Result" />
    
      <div style={textStyle}>
        <p>{win && score > 100 ? ` Your score was ${score}` : score < 101 && win ? `Get your points up playa! You only scored ${score}` : null}</p>
        
        
      </div>
    </>
  );
};

export default ResultScreen;
