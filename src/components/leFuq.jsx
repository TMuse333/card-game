import React, { useState } from 'react';

const FlipCardd = ({ cardNumber }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <h2>Card {cardNumber}</h2>
        </div>
        <div className="flip-card-back">
          <h2>Back of Card {cardNumber}</h2>
        </div>
      </div>
    </div>
  );
};

const PlsWork = () => {
  return (
    <div className="flipped-cards">
      <div className="card-container">
        <FlipCardd cardNumber={1} />
      </div>
      <div className="card-container">
        <FlipCardd cardNumber={2} />
      </div>
    </div>
  );
};

export default PlsWork;
