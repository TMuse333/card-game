import React from 'react';
import CardSet from './CardSet';
import { useCardState } from './usedCardState';
// import Tilt from 'react-tilt';


const Card = ({ value, imageSrc,cardData}) => {
  const { isHovered,
     isClicked,
      handleMouseEnter, 
      handleMouseLeave, 
      handleClick
     } = useCardState(value,cardData);

  

  

  

  const cardStyle = {
    boxShadow: isHovered && !isClicked ? '0px 0px 100px 0px rgba(255, 0, 0, 0.5)' : 'none',
    transition: 'box-shadow 0.3s ease-in-out',
    transform: isClicked ? 'scale(2.33)' : isHovered ? 'scale(1.2)' : 'scale(1)',
    position: isClicked ? 'fixed' : 'static',
    top: isClicked ? '30%' : 'auto',
    left: isClicked ? '40%' : 'auto',
    zIndex: isClicked ? 1 : 'auto',
    overflow: 'auto'
    
  };




  const isEnlarged = false
  const canBeEnlarged = true

  

  return (
 
      
      <div className="card-container">
    
        <img
          src={imageSrc}
          alt="img"
          className="card"
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
          handleClick();
          
        }}
         
        />
       </div>
      
    
    
  );
};

export default Card;
