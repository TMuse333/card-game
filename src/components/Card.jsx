import React from 'react';
import { useCardState } from './usedCardState';

const Card = ({ value, imageSrc, onClick, isClicked }) => {
  const { isHovered,  handleMouseEnter, handleMouseLeave } = useCardState();

  

  const cardStyle = {
    boxShadow: isHovered && !isClicked ? '0px 0px 100px 0px rgba(255, 0, 0, 0.5)' : 'none',
    transition: 'box-shadow 0.3s ease-in-out',
    transform: isClicked ? 'scale(2.33)' : isHovered ? 'scale(1.2)' : 'scale(1)',
    position: isClicked ? 'fixed' : 'static',
    top: isClicked ? '50%' : 'auto',
    left: isClicked ? '50%' : 'auto',
    zIndex: isClicked ? 1 : 'auto',
  };

  return (
    
      <div className="card-container">
        <img
          src={imageSrc}
          alt="img"
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={()=> onClick(value)}
          isClicked={isClicked}
        />
      </div>
    
  );
};

export default Card;
