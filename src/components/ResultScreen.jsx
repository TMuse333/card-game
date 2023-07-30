import React, { useEffect, useState, useCallback } from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp';
import Vegeta from '../images/vegeta-battle.png'
import saiyans from '../images/broly.jpg'

const ResultScreen = ({ win, score }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, [updateScreenWidth]);

  const styles = {
    display: win === null ? 'none' : 'flex',
    height: '80vw',
    width: '50vw',
  
    zIndex: 50,
  //  animation: !win ? 'moveAndScaleClown 1.5s infinite ease' : 'scaleUp 0.3s ease',
    transition: ' transform 1s ease',

  };

  const textStyle = {
    fontFamily: 'Bangers, cursive',
    background: 'linear-gradient(45deg, #ff0000, #ff6f00, #ffd700, #ff0000)',
    backgroundSize: '400% 400%',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    animation: 'animateGradient 10s linear infinite',
    width: 'fit-content',
    
    fontSize: '3rem',
    marginTop:screenWidth >= 1919 ? '-4rem' : '1rem',
    marginLeft: screenWidth >= 1919 ? '25rem' : screenWidth >= 767 ? '9rem' : '-1.5344rem',
  };

  return (
    <>
      <img src={win ? saiyans : !win  && win !== null? clown : null} style={styles} alt="Result" />
      <div style={textStyle}>
        <p>{win ? `You Win! Your score was ${score}` : !win && win !== null ? `You Lose! Your score was ${score}` : null}</p>
      </div>
    </>
  );
};

export default ResultScreen;
