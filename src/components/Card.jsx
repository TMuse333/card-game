import React, { useState } from 'react';

const Card = ({ value, imageSrc }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered,setIsHovered] = useState(false)


const handleClick = () => {
  setIsClicked(!isClicked)
}

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  const cardStyle = {
    boxShadow: isHovered && !isClicked ? '0px 0px 100px 0px rgba(255, 0, 0, 0.5)' : 'none',
    transition: 'box-shadow 0.3s ease-in-out',
    transform: isClicked ? 'scale(2.33)' : isHovered ? 'scale(1.2)' : 'scale(1)',
    position: isClicked  ? 'fixed' : 'static',
    top: isClicked  ? '30%' : 'auto',
    left: isClicked  ? '40%' : 'auto',
    zIndex: isClicked  ? 1 : 'auto',
    overflow: 'auto',
  };

  return (
    <div className="card-container">
      <img
        src={imageSrc}
        alt="img"
        className="card"
        style={cardStyle}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
    
  );
};

export default Card;
