import React, { useState } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';


const FlipCard = ({ imageSrc, onClick, isBig, selectedImage }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () =>{
        setIsHovered(true)

    }

    const handleMouseLeave = () =>[
        setIsHovered(false)
    ]

    const handleClick = (event) => {
        event.shiftKey ? (()=>{
            setIsFlipped(!isFlipped)
            isBig = false;
        })()  : null

      onClick();
    };
  
    const cardStyle = {
      height: '23vw',
      width: '15vw',
      transform: isBig && !isFlipped ? 'scale(2)' :
       isHovered && !isBig ? 'scale(1.2)' : null,
      transition: 'transform 0.3s ease-in-out',
      boxShadow: isHovered && !isBig ? '0 0 20px 20px gold' : 'none',
       
    };
  
    const textStyle = {
      color: 'black',
      height: '23vw',
      width: '15vw',
    };
  
    const backStyle = {
      height: '23vw',
      width: '15vw',
      background: 'orange'
    };
  
    return (

      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imageSrc}
             alt="Front"
              style={cardStyle}
               onClick={onClick}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave} />
          </div>
          <div className="flip-card-back" style={backStyle}>
            <img src={Sasuke} style={textStyle}/>
          </div>
        </div>
      </div>
    );
  };
  
  const Flipped_Cards = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleCardClick = (imageSrc) => {
      selectedImage === imageSrc ? setSelectedImage(null) : setSelectedImage(imageSrc);
    };
  
    return (
<>

<div className='cardSet'>

<FlipCard
        imageSrc={Abu}
        isBig={selectedImage === Abu}
        onClick={() => handleCardClick(Abu)}
      />

      <FlipCard
        imageSrc={MajinVegeta}
        isBig={selectedImage === MajinVegeta}
        onClick={() => handleCardClick(MajinVegeta)}
      />
</div>
</>
    );
  };
  
  export default Flipped_Cards;
  
