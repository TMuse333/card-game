import React, { useState } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';

import { cardData } from './cardData';



const Card = ({ imageSrc,
   onClick, 
   isBig,
    selectedImage,
   text,
   altSrc,shiftClick,altShown,alternate,
  isDissolving }) => {
  const[isClicked,setIsClicked] = useState(false)
  const[isHovered, setIsHovered] = useState(false)
  

  const handleClick = () => {
    setIsClicked(!isClicked)
    onClick()
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseleave = () => {
    setIsHovered(false)
  }

  const handleShiftClick = (event) =>{
       
    event.shiftKey ? shiftClick() : null
    console.log("function went through")
        }

  const cardStyle = {
    height: '23vw',
    width: '15vw',
    maxHeight: '400px',
    maxWidth: '260px',
    transform: isBig && !altShown? 'scale(2)' :
     isHovered && selectedImage === null ?
     'scale(1.2)' : !isBig && selectedImage != null && !altShown?
     'scale(0.75)' : null,
     transition: 'transform 0.3s ease',
     filter: selectedImage && selectedImage != imageSrc && !altShown && alternate === null?
     'blur(5px)' : null,
     boxShadow: !isBig && isHovered && !selectedImage ?
     '0 0 40px 20px gold' : null,
     position: isBig && !altShown ? 'fixed' : 'static',
     top: isBig && !altShown? '35%' : 'auto%',
     left: isBig && !altShown? '43%' : 'auto%',
    }

//window.innerWidth, window.innerHeight for things based off screenSize

    const textStyle = {
  
     transform: isBig ? 'scale(1) translate(320%,-20%)' : 'scale(0)',
     transition: 'transform 1.2s ease',
     background: 'orange',
     maxWidth: '350px',
     color: 'black',
     padding: '10px',
     paddingBottom: '30px',
     paddingTop: '25px',
     
    }

    const otherSide = {
        transform: !isHovered ? 'scale(0)' : 'scale(1)',
        transition: 'transform 0.3s ease',
        height: '23vw',
        width: '15vw',
        maxHeight: '400px',
        maxWidth: '260px',
    }

  return (

    // transform: imageSrc === Abu ? 'translateX(50%)' : null
    //the above code can potentially fix the transportation issue,
    //but you would have to set up a lot of the card style
    //position properties in the card-container class
    //with imageSrc === character, which could take lots
    //of time

    <div className='card-container'
    style=
    {{ position: 'relative', zIndex: isBig || isHovered? 1 : 0 ,
   }}>
        <img src={!altShown?imageSrc:altSrc}
        onClick={(event) => {
            handleClick();
            handleShiftClick(event)
            
          }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseleave}
        style={cardStyle}

        />
        
    </div>
  )
  }
    const CardSet = () =>{
        const [selectedImage,setSelectedImage] = useState(null)
        const [alternate, setAlternate] = useState(false)
        const [isDissolving, setIsDissolving] = useState(false)
        
        const cardClick = (imageSrc) =>{
            selectedImage === imageSrc ? setSelectedImage(null): 
            !selectedImage? setSelectedImage(imageSrc) : null
        }

        const handleShiftClick = (altSrc, isBig) =>{
          console.log(alternate === Sasuke)  

           alternate === altSrc ?
           setAlternate(null) : !isBig? (()=>{
            setAlternate(altSrc)
           
           })():null

            console.log(alternate === Sasuke)

           
        }

     

        return (
            <>

            <div className='cardSet'
            >

            <Card
            imageSrc={Abu}
            onClick={()=>cardClick(Abu)}
            isBig={selectedImage === Abu}
            selectedImage={selectedImage}
            altSrc={Sasuke}
            shiftClick={()=>handleShiftClick(Sasuke,selectedImage === Abu)}
            altShown={alternate === Sasuke}
            alternate={alternate}
            isDissolving={isDissolving}
            // text={cardData[0]}
            />

             <Card
            imageSrc={MajinVegeta}
            onClick={()=>cardClick(MajinVegeta)}
            isBig={selectedImage === MajinVegeta}
            selectedImage={selectedImage}
            altSrc={Kakashi}
            shiftClick={()=>handleShiftClick(Kakashi,selectedImage === Kakashi)}
            altShown={alternate === Kakashi}
            alternate={alternate}

            
            />
{/*
<Card
            imageSrc={Obito}
            onClick={()=>cardClick(Obito)}
            isBig={selectedImage === Obito}
            selectedImage={selectedImage}
            />

<Card
            imageSrc={Saiyans}
            onClick={()=>cardClick(Saiyans)}
            isBig={selectedImage === Saiyans}
            selectedImage={selectedImage}
            />

<Card
            imageSrc={Sasuke}
            onClick={()=>cardClick(Sasuke)}
            isBig={selectedImage === Sasuke}
            selectedImage={selectedImage}
            />

<Card
            imageSrc={Kakashi}
            onClick={()=>cardClick(Kakashi)}
            isBig={selectedImage === Kakashi}
            selectedImage={selectedImage}
            />

<Card
            imageSrc={War_Obito}
            onClick={()=>cardClick(War_Obito)}
            isBig={selectedImage === War_Obito}
            selectedImage={selectedImage}
            />

<Card
            imageSrc={Sainey}
            onClick={()=>cardClick(Sainey)}
            isBig={selectedImage === Sainey}
            selectedImage={selectedImage}
            /> */}
</div>
            </>
        )
    }



export default CardSet;

