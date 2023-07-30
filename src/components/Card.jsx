import React, { useState, useEffect, useRef } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';
import Vegeta from '../images/vegeta-battle.png'

const Card = ({ imageSrc,
   onClick, 
   isBig,
    selectedImage,
   text,
   altSrc,
   shiftClick,
   altShown,
   alternate,
  isDissolving,
  additonalStyle,
  gameOver,
  correct,
  incorrect
 
 }) => {
  const[isClicked,setIsClicked] = useState(false)
  const[isHovered, setIsHovered] = useState(false)
  
  



  const handleMouseEnter = () => {
    setIsHovered(true)
   
  }

  const handleMouseleave = () => {
    setIsHovered(false)
  }

  const handleClick = (event) =>{
  setIsClicked(!isClicked)

     event.shiftKey && gameOver || ( selectedImage !== null &&
      selectedImage === imageSrc)? shiftClick() : onClick() 
    }

    

  const cardStyle = {
    height: '30vw',
    width: '19vw',
    maxHeight: '250px',
    maxWidth: '160px',

    filter: selectedImage !== null && selectedImage != imageSrc && gameOver? 'blur(5px)' : null,

   // correct && altShown ? '0 0 50px 50px green'

  
     transition: 'transform 0.3s ease, opacity 0.2s ease, top 0.3s ease, left 0.3s ease, right 0.3s ease',
   
     opacity: isDissolving &&altShown? 0 : 1,
     boxShadow:correct && altShown ? '0 0 30px 30px green':
      incorrect && altShown ? '0 0 30px 30px red' :  isHovered  && !selectedImage? '0 0 50px 25px gold': 'none', 
     transform:
      
      isHovered  && !selectedImage && correct === null? 'scale(1.2)' : 
      isBig && selectedImage === Abu && gameOver? 'scale(3) translate(60%, 12%)' :
      isBig && selectedImage === MajinVegeta && gameOver? 'scale(3) translate(20%,12%)' :
      isBig && selectedImage === Obito && gameOver? 'scale(3) translate(-20%,12%)' :
      isBig && selectedImage === Saiyans && gameOver? 'scale(3) translate(-60%,12%)' :
      isBig && selectedImage === Sasuke && gameOver? 'scale(3) translate(60%,-25%)' :
      isBig && selectedImage === Kakashi && gameOver? 'scale(3) translate(20%,-25%)' :
      isBig && selectedImage === War_Obito && gameOver? 'scale(3) translate(-19%,-25%)' :
      isBig && selectedImage === Vegeta && gameOver? 'scale(3) translate(-61%,-25%)'  :
      correct && altShown ? 'scale(1.5)' : 'scale(1)',


     border: '2px solid black',
     animation: gameOver && !isBig &&isHovered  && selectedImage === null? 'shake 2s infinite'
     :   incorrect && altShown && !gameOver? 'shakeAndScale 0.5s 1' :
     correct && altShown && !gameOver? 'moveAndScale 1s 1' :
     'none' ,
   
   
    }


    const mergedStyle = { ...cardStyle, ...additonalStyle}

    const textBoxStyle = {
      position: 'absolute',
      top:  selectedImage === Abu ||selectedImage === MajinVegeta ||selectedImage === Obito ||
      selectedImage === Saiyans? '235%' : '125%', 
       
      marginLeft: selectedImage === Abu ? '1.5vw' :
      selectedImage === MajinVegeta? '-15.5vw' :
      selectedImage === Obito? '-35.5vw' :
      selectedImage === Saiyans? '-11.5vw' :
      selectedImage === Sasuke? '1rvw' :
      selectedImage === Kakashi? '-15.5vw' :
      selectedImage === War_Obito? '-40.5vw' :
      selectedImage === Vegeta? '-60.5vw' : null, // Center the text box horizontally relative to the image
     // Center the text box horizontally relative to the image
      padding: '8px',
      background: 'linear-gradient(45deg, orange, red)',
      color: 'white',
      fontSize: '0.55rem',
      fontWeight: 'bold',
      display: isBig ? 'block' : 'none',
      width: '80vw',
      height: '4rem',
    };
  

//window.innerWidth, window.innerHeight for things based off screenSize

  

  return (

   

    <div className='card-container'
    style=
    {{ position: 'relative', zIndex:( (isHovered && selectedImage === null ) || isBig ) && (correct === null && incorrect === null)? 100 : (correct != null || incorrect !== null) && !altShown ? -1 : 0 ,
   }}>
        <img src={!altShown?imageSrc:altSrc}
        onClick={() => {
            handleClick(event);
             }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseleave}
        style={mergedStyle}
       

        />
            {isBig && text && (
        <div className="text-box" style={textBoxStyle}>
          {text}
        </div>
            )}
        
    </div>
  )
  }

  export default Card
   
