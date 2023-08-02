import React, { useEffect, useState, useCallback } from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp';
import Vegeta from '../images/vegeta-battle.png'
import saiyans from '../images/broly.jpg'

const ResultScreen = ({ win, score, showResult }) => {
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
    display: win === null  && !showResult? 'none' : 'block',
    height: '70vw',
    width: '50vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3rem',
    zIndex: 50,
    animation: !win || (score === 0  ) && showResult? 'moveAndScaleClown 1.5s infinite ease' : 'scaleUp 1.5s ease',
    transition: ' transform 1s ease',

  };

  const textStyle = {
    fontFamily: 'Bangers, cursive',
    background: 'linear-gradient(45deg, #ff0000, #ff6f00, #ffd700, #ff0000)',
    backgroundSize: '400% 400%',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    animation: showResult ? 'animateGradient 10s linear infinite' : null,
    width: 'fit-content',
    
    fontSize: '2.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <>
      <img src={ win ? saiyans : !win  && win !== null? clown : null} style={styles} alt="Result" />
    {/* <img src={showResult ? clown : null}
    style={styles}/> */}
      <div style={textStyle}>
        <p>{win ? ` Your score was ${score}` : !win && win !== null && showResult? `You Lose! Your score was ${score}` : null}</p>
      </div>
    </>
  );
};

export default ResultScreen;
