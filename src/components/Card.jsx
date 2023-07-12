import React, { useState } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';



const Card = ({ imageSrc, onClick, isBig, selectedImage }) => {
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

  const cardStyle = {
    height: '23vw',
    width: '15vw',
    maxHeight: '400px',
    maxWidth: '260px',
    transform: isBig ? 'scale(2)' :
     isHovered && selectedImage === null ?
     'scale(1.2)' : !isBig && selectedImage != null ?
     'scale(0.75)' : null,
     transition: 'transform 0.3s ease',
     filter: selectedImage && selectedImage != imageSrc ?
     'blur(5px)' : null,
     position: isBig? 'fixed' : 'static',
     top: isBig ? '35%' : '1%',
     left: isBig ? '43%' : '1%',
    }

  return (
    <div className='card-container'
    style={{ position: 'relative', zIndex: isBig ? 1 : 'auto' }}>
        <img src={imageSrc}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseleave}
        style={cardStyle}
        />
    </div>
  )
  }
    const CardSet = () =>{
        const [selectedImage,setSelectedImage] = useState(null)
        
        const cardClick = (imageSrc) =>{
            selectedImage === imageSrc ? setSelectedImage(null):
            setSelectedImage(imageSrc)
        }

        return (
            <>

            <div className='cardSet'>

            <Card
            imageSrc={Abu}
            onClick={()=>cardClick(Abu)}
            isBig={selectedImage === Abu}
            selectedImage={selectedImage}
            />

            <Card
            imageSrc={MajinVegeta}
            onClick={()=>cardClick(MajinVegeta)}
            isBig={selectedImage === MajinVegeta}
            selectedImage={selectedImage}
            />

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
            />
</div>
            </>
        )
    }



export default CardSet;

