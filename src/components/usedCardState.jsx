import { useState, useEffect } from 'react';
import Card from './Card';
import CardSet from './CardSet';


export const useCardState = (value, cardData) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [enlargedCard, setEnlargedCard] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
  };

  const handleClick = (CardSet) => {
    setIsClicked(!isClicked)
    const clickedCard = cardData.find((card) => card.value === value);
    console.log('Clicked Card:', clickedCard);
    
  };

 

  return {
    isHovered,
    isClicked,
    
    handleMouseEnter,
    handleMouseLeave,
    handleClick,

  };
};
