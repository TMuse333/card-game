import React, { useState, useEffect } from 'react';

const CountdownTimer = ({gameOver}) => {
  const [remainingTime, setRemainingTime] = useState(60);






  useEffect(() => {
    
    let interval;
    if (gameOver && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }


    return () => {
      clearInterval(interval);
    };
  }, [gameOver,remainingTime]);

  useEffect(() => {
    if (remainingTime === 0) {
      // Handle actions to be performed after the countdown is finished
      // For example, setWinGame(true) if you want the player to win after 1 minute
    }
  }, [remainingTime]);


  return (
    <div>
      {remainingTime > 0 ? (
        <div>{`Time Remaining: ${remainingTime} seconds`}</div>
      ) : (
        <div>Time's up!</div>
      )}
    </div>
  );
};

export default CountdownTimer;
