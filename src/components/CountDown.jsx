import React, { useState, useEffect } from 'react';

const CountdownTimer = ({gameOver,win,duration}) => {
  const [remainingTime, setRemainingTime] = useState(duration);






  useEffect(() => {
    
    let interval;
    if (gameOver && remainingTime > 0 ) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }


    return () => {
      clearInterval(interval);
    };
  }, [gameOver,remainingTime,duration]);

  useEffect(() => {
    if (remainingTime === 0 || (!win && win !== null) || !gameOver) {
     setTimeout(()=>{
        setRemainingTime(duration)
     },4000)
    }
  }, [remainingTime,win,duration]);

  const timerStyle={
    fontSize: '1rem',
    marginTop: '-1.5rem',
  // marginRight: '2rem',
  }


  return (
    <div>
      {remainingTime > 0 ? (
        <div
        style={timerStyle}>{`Time Remaining: ${remainingTime} seconds`}</div>
      ) : (
        <div>Time's up!</div>
      )}
    </div>
  );
};

export default CountdownTimer;
