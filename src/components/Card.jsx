import React, { useState } from 'react';
import MajinVegeta from '../images/majin-vegeta.png';


const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle={
    height: '23vw',
    width: '15vw',
  
}

const textStyle={
    color:'black',


}

const backStyle={
    height: '23vw',
    width: '15vw',
    background: 'orange'

}

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img 
          src={MajinVegeta}
           alt="Front"
           style={cardStyle} />
        </div>
        <div className="flip-card-back" style={backStyle}>
          <p style={textStyle}>Text Content</p>
        </div>
      </div>
    </div>
  );
};


export default FlipCard