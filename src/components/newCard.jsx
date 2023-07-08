import React, { useState } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';

import {cardData} from './cardData.js'

const Card = ({ imageSrc, onClick, isBig, selectedImage, text }) => {
    const[isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () =>{
        setIsHovered(true)
    }

    const handleMouseLeave = () =>{
        setIsHovered(false)
    }
  const handleClick = () => {
    onClick();
  };

  const cardStyle = {
    transform: isBig ? 'scale(2.33)' : isHovered  && selectedImage === null? 'scale(1.2)' : 'scale(1)',
    position: isBig ? 'fixed' : 'static',
    top: isBig ? '30%' : 'auto',
    left: isBig ? '40%' : 'auto',
    zIndex: isBig ? 1 : 'auto',
    filter: selectedImage && selectedImage !== imageSrc ? 'blur(5px)' : 'none',
    boxShadow: isHovered && !isBig  && selectedImage === null? '0 0 10px 25px rgba(255, 215, 0, 0.5)' : 'none',
    transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  };

  const textStyle = {
   display: isBig ? 'block' : 'none',
   color : 'red',
  position: 'fixed',
  top: '30%',
  left: '63%',
  zIndex: '1',
  background: 'orange',
  height: '23vw',
  width: '15vw'


  }
  
  

  return (
    <div className="card-container">
        <p style={textStyle}>{text}</p>
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

const CardSet = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (imageSrc) => {
    if (selectedImage === imageSrc) {
      setSelectedImage(null); // Return the image to its original size
    } else if (!selectedImage) {
        console.log("lol")
      setSelectedImage(imageSrc); // Enlarge the clicked image
    }
  };

  return (
    <div className="cardSet">
      <Card
        imageSrc={Abu}
        onClick={() => handleCardClick(Abu)}
        isBig={selectedImage === Abu}
        selectedImage={selectedImage}
        text={cardData[0]}
      />
      <Card
        imageSrc={MajinVegeta}
        onClick={() => handleCardClick(MajinVegeta)}
        isBig={selectedImage === MajinVegeta}
        selectedImage={selectedImage}
      />
      <Card
        imageSrc={Obito}
        onClick={() => handleCardClick(Obito)}
        isBig={selectedImage === Obito}
        selectedImage={selectedImage}
      />
      <Card
        imageSrc={Saiyans}
        onClick={() => handleCardClick(Saiyans)}
        isBig={selectedImage === Saiyans}
        selectedImage={selectedImage}
      />
      <Card
        imageSrc={Sasuke}
        onClick={() => handleCardClick(Sasuke)}
        isBig={selectedImage === Sasuke}
        selectedImage={selectedImage}
      />
      <Card
        imageSrc={War_Obito}
        onClick={() => handleCardClick(War_Obito)}
        isBig={selectedImage === War_Obito}
        selectedImage={selectedImage}
      />
      <Card
        imageSrc={Sainey}
        onClick={() => handleCardClick(Sainey)}
        isBig={selectedImage === Sainey}
        selectedImage={selectedImage}
      />
      <Card
        imageSrc={Kakashi}
        onClick={() => handleCardClick(Kakashi)}
        isBig={selectedImage === Kakashi}
        selectedImage={selectedImage}
      />
    </div>
  );
};

export default CardSet;
