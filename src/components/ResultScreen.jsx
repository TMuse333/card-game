import React from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg';
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp';

const ResultScreen = ({ win, score }) => {
  const styles = {
    display: 'flex',
    height: win !== null ? '46vw' : '0vw',
    width: win !== null ? '93vw' : '0vw',
    marginTop: win !== null ? '5rem' : '0vw',
    transform: 'translate(-7%, -5rem)',
    zIndex: 50,
  };

  const textStyle = {
  
    background: 'linear-gradient(45deg, #ff0000, #ff6f00, #ffd700, #ff0000)',
    backgroundSize: '400% 400%',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    animation: 'animateGradient 10s linear infinite',
    width: 'fit-content', // Ensure the wrapper div wraps the text tightly
    // zIndex: 90000,
    fontSize: '2rem',
    marginTop: '-3rem',
    marginRight: '2rem',
    
  };2

  return (
    <>
      <img src={win ? gokuVsJiren : !win ? clown : null} style={styles} />
      <div style={textStyle}>
        {/* Wrap the text inside a div to apply the background */}
        <p>{win ? `You Win! Your score was ${score}` : !win && win !== null ? `You Lose! Your score was ${score}` : null}</p>
      </div>
    </>
  );
};

export default ResultScreen;
