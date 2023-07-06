import { useState } from 'react';

export const useCardState = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    console.log('card clicked')
    setIsClicked(!isClicked);
  };

  return {
    isHovered,
    isClicked,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};
