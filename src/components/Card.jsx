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
    const [isEnlarged,setIsEnlarged] = useState(false)
  
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
        setIsEnlarged(!isEnlarged)
      onClick();
    };
  
    const cardStyle = {
        height: '23vw',
        width: '15vw',
        transform: isBig
          ? 'scale(2) translate(-50%, -50%)' // Scale and center if isBig is true
          : isHovered
          ? 'scale(1.2)' // Scale on hover if not isBig
          : 'none',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: isHovered && !isBig ? '0 0 20px 20px gold' : 'none',
        position: isBig ? 'fixed' : 'static',
        maxHeight: '400px',
        maxWidth: '260px',
        left: isBig ? '50%' : 'auto',
        top: isBig ? '50%' : 'auto',
      };
      
      
  
    const textStyle = {
      color: 'black',
      height: '23vw',
      width: '15vw',
      zIndex: 0,
    };
  
    const backStyle = {
      height: '23vw',
      width: '15vw',
      background: 'orange',
      zIndex: 0
    };
  
    return (

<>

     
            <img src={imageSrc}
            
              style={cardStyle}
               onClick={onClick}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave} />
    
      </>
    );
  };
  
  const Card_Set = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleCardClick = (imageSrc) => {
      selectedImage === imageSrc ? setSelectedImage(null) : setSelectedImage(imageSrc);
    };
  
    return (
<>
<div className='card-container'>




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

<FlipCard
        imageSrc={Obito}
        isBig={selectedImage === Obito}
        onClick={() => handleCardClick(Obito)}
       />

<FlipCard
        imageSrc={Saiyans}
        isBig={selectedImage === Saiyans}
        onClick={() => handleCardClick(Saiyans)}
       />

<FlipCard
        imageSrc={Sasuke}
        isBig={selectedImage === Sasuke}
        onClick={() => handleCardClick(Sasuke)}
       />

<FlipCard
        imageSrc={Kakashi}
        isBig={selectedImage === Kakashi}
        onClick={() => handleCardClick(Kakashi)}
       />

<FlipCard
        imageSrc={Sainey}
        isBig={selectedImage === Sainey}
        onClick={() => handleCardClick(Sainey)}
       />

<FlipCard
        imageSrc={War_Obito}
        isBig={selectedImage === War_Obito}
        onClick={() => handleCardClick(War_Obito)}
       />

</div>



       
      

</>
    );
  };
  
  export default Card_Set;
  
