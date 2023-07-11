import React, { useState } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';

import {cardData} from './cardData'


const FlipCard = ({ imageSrc, onClick, isBig, selectedImage, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const[isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (event) => {
    event.shiftKey  && !isBig? setIsFlipped(!isFlipped) :( () =>{
        setIsExpanded(!isExpanded)
        onClick();
        
    })()
  };

  const handleMouseEnter = () =>{
    setIsHovered(true)
  }

  const handleMouseLeave = () =>{
    setIsHovered(false)
  }

  const cardStyle={
       height: '23vw',
        width: '15vw',
        transform: isBig 
        ? 'scale(1.75)'
        : isHovered && selectedImage === null
        ? 'scale(1.2)'
        : !isBig && selectedImage !== null
        ? 'scale(0.8)'
        : 'scale(1)',
        position: isBig ? 'fixed' : 'relative',
        top: isBig ? '20%' : 'auto',
        left: isBig ? '50%' : 'auto',
       
       
        filter: selectedImage && selectedImage !== imageSrc ? 'blur(5px)' : 'none',
        boxShadow: isHovered && !isBig  && selectedImage === null? '0 0 10px 25px rgba(255, 215, 0, 0.5)' : 'none',
        transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      };
  


const backTextStyle={
    color:'black',


}

const backStyle={
    height: '23vw',
    width: '15vw',
    background: 'red',
  
    
   

}

const textStyle = {
    color : 'black',
   position: 'fixed',
   top: '30%',
   left: '2%',

  
   background: 'orange',
   transform: isBig ? 'scale(1)' : 'scale(0) ',
   height: '23vw',
   width: '15vw',
   transition: 'opacity 3s, transform 1s',
   padding: '5px',
   
 }

 const containerStyle = {
    position: isBig ? 'fixed' : 'static',
    top: isBig ? '20%' : 'auto',
    left: isBig ? '50%' : 'auto',
    transform: 'translate(-50%, 0)', // Add this line
  };


  return (



<div style={containerStyle}>
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img 
          src={imageSrc}
           alt="Front"
           style={cardStyle} 
        //    onClick={handleClick}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}/>
        </div>
        <div className="flip-card-back" style={backStyle}>
          <p style={backTextStyle}>Text Content</p>
        </div>
        {/* <aside className="box-text"
        style={textStyle}>{text}</aside> */}
      </div>
    </div>
    </div>
    
   
  );
};



    const flippedCards = () =>{

        const[selectedImage,setSelectedImage] = useState(null)

        const handleClick = (imageSrc) =>{
        
        selectedImage === imageSrc ? setSelectedImage(null) :
        setSelectedImage(imageSrc)

        }

return (
    <>

<div className='cardSet'>

    <div className='card-one' style={{
        zIndex: selectedImage === Abu ? 100 : 0,
        transform: selectedImage === Abu ? 
        'translate(-5vw,-8vw)' : 'translate(-45vw,-20vw)',
        transition: 'transform 0.3s ease-in-out'
     }}
     >
    <FlipCard
    imageSrc={Abu}
    onClick={() => handleClick(Abu)}
    isBig={selectedImage === Abu}
    selectedImage={selectedImage}
    text={cardData[0]}
   
    />
    </div>
    <div className='card-two'style={{
        zIndex: selectedImage === MajinVegeta ? 100 : 0,
        transform: selectedImage === MajinVegeta ? 
        'translate(-5vw,-8vw)' : 'translate(-25vw,-20vw)',
        transition: 'transform 0.3s ease-in-out'
     }}
     >
    <FlipCard
    imageSrc={MajinVegeta}
    onClick={() => handleClick(MajinVegeta)}
    isBig={selectedImage === MajinVegeta}
    selectedImage={selectedImage}
    text={cardData[1]}
    />
    </div>

     <div className='card-row' style={{zIndex: selectedImage === Obito ? 100 : 0,
    transform:'translate(-5vw,-20vw)',
    transition: 'transform 0.3s ease-in-out',
    position: selectedImage === Obito?
    'fixed' : 'auto',
    top:selectedImage === Obito?
    '70%' : 'auto',
    left: selectedImage === Obito?
    '45vw':'auto'}}>
       <FlipCard
    imageSrc={Obito}
    onClick={() => handleClick(Obito)}
    isBig={selectedImage === Obito}
    selectedImage={selectedImage}
    text={cardData[2]}
   
    />
</div>

{/* selectedImage === Obito? 
    'translate(-10vw,-8vw)': */}

<div className='card-row' style={{zIndex: selectedImage === Saiyans ? 100 : 0,
transform: 'translate(15vw,-20vw)',
transition: 'transform 0.3s ease-in-out'}}>
<FlipCard
    imageSrc={Saiyans}
    onClick={() => handleClick(Saiyans)}
    isBig={selectedImage === Saiyans}
    selectedImage={selectedImage}
    text={cardData[3]}
    
    />
    </div>

    <div className='card-row' 
    style={{zIndex: selectedImage === Sasuke ? 100 : 0,
        transform: 'translate(-45vw,10vw)',
        transition: 'transform 0.3s ease-in-out'}}>
<FlipCard
    imageSrc={Sasuke}
    onClick={() => handleClick(Sasuke)}
    isBig={selectedImage === Sasuke}
    selectedImage={selectedImage}
    text={cardData[3]}
    
    />
    </div> 

</div>
    </>
)



    }


export default flippedCards