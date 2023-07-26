import React, { useEffect, useState, useCallback } from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp';

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
    height:  '46vw'  ,
    width:  '93vw'  ,
    maxWidth: '1500px',
    maxHeight: '750px',
    marginTop: win !== null ? '5rem' : '0vw',
    transform:
    win === null ? 'scale(0.1)' :
      screenWidth >= 1919 ? 'translate(-5rem,-5rem) scale(1)' :
      screenWidth >= 1575 ? 'translate(-8rem, 1rem) scale(1)' :
      screenWidth >= 767 ? 'translate(-0.5rem, -1.5rem) scale(1)' :
      'translate(-1.3rem, -1rem) scale(1)',
    zIndex: 50,
  //  animation: !win ? 'moveAndScaleClown 1.5s infinite ease' : 'scaleUp 0.3s ease',
    transition: ' transform 1s ease'
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
    marginTop:screenWidth >= 1919 ? '-4rem' : '3rem',
    marginLeft: screenWidth >= 1919 ? '25rem' : screenWidth >= 767 ? '9rem' : '-1.5344rem',
  };

  return (
    <>
      <img src={win ? gokuVsJiren : !win  && win !== null? clown : null} style={styles} alt="Result" />
      <div style={textStyle}>
        <p>{win ? `You Win! Your score was ${score}` : !win && win !== null ? `You Lose! Your score was ${score}` : null}</p>
      </div>
    </>
  );
};

export default ResultScreen;
