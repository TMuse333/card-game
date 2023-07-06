import { useState, useEffect } from 'react';



export const useCardState = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // const [enlargedCard, setEnlargedCard] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    // setIsEnlarged((prevIsEnlarged) => !prevIsEnlarged)
  };

  // useEffect(() => {
  //   console.log('isClicked:', isClicked);
  //   console.log('enlargedCard:', enlargedCard);
  // }, [isClicked, enlargedCard]);

  return {
    isHovered,
    isClicked,
    
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};
