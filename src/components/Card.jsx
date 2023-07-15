import React, { useState, useEffect } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';

import Sudo1 from '../images/pokemon-sudowoodo.gif'
import Sudo2 from '../images/3b82c72924a818c910bd4fd3b8557dc8fed0f14d_hq.gif'
import Sudo3 from '../images/pokemon-sudowoodo-2.gif'
import Piplup from '../images/piplup-excited.gif'
import Turtwig from '../images/pokémon-turtwig.gif'
import Hitmonlee from '../images/pokémon-hitmonlee.gif'
import Squirtle from '../images/giphy.gif'
import Majikarp from '../images/pokemon-magikarp.gif'


import { card_names } from './cardData';




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
  style }) => {
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
    
        }

  const cardStyle = {
    height: '23vw',
    width: '15vw',
    maxHeight: '250px',
    maxWidth: '160px',
    
   /* transform: isBig && !altShown &&!isDissolving? 'scale(2)' :
     isHovered && selectedImage === null ?
     'scale(1.2)' : !isBig && selectedImage != null && alternate === null && alternate === altSrc?
     'scale(0.75)' : null,
     transition: 'transform 0.3s ease, opacity 0.2s ease',
     filter:  selectedImage && selectedImage != imageSrc  &&!alternate &&!isDissolving? 'blur(5px)' : null,
     position: isBig && !altShown &&!isDissolving? 'fixed' : 'static',
     top: isBig && !altShown &&!isDissolving? '35%' : 'auto%',
     left: isBig && !altShown &&!isDissolving? '43%' : 'auto%',
     opacity: isDissolving &&altShown? 0 : 1,
     boxShadow: !alternate && isHovered && selectedImage === null? '0 0 50px 25px gold' : 'none',*/
    // ...(alternate === randomImage ? {filter: 'blur(14px)'} : {})
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
    {{ position: 'relative', zIndex: isBig || isHovered && selectedImage === imageSrc? 1 : 0 ,
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
        const [alternate, setAlternate] = useState(null)
        const [isDissolving, setIsDissolving] = useState(false)
        const [matchCount,setMatchCount] = useState(0)
        
        const cardClick = (imageSrc) =>{
            selectedImage === imageSrc ? setSelectedImage(null): 
            !selectedImage? setSelectedImage(imageSrc) : null
        }


        const shuffleCards = () => {

          // if (changeVar && !selectedImage){

          
          const shuffledCards = [...cards];
          for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
          }
          setCards(shuffledCards);
        
        };



/*const handleShiftClick = (altSrc, isBig) => {
  alternate === altSrc
    ? setAlternate(null)
    : !isBig
    ? (() => {
        setIsDissolving(true); // Start the dissolving animation
        setTimeout(() => {
          setAlternate(altSrc);
          setTimeout(() => {
            setIsDissolving(false); // End the dissolving animation
          }, 75); // Adjust the duration as needed
        }, 100); // Delay before switching the image
      })()
    : null;

  altSrc === randomImage ?(()=>{
    setMatchCount(matchCount+1)
    console.log(matchCount)
  })()  : console.log("incorrect!")
};*/


const handleShiftClick = (altSrc, isBig) => {
  alternate === altSrc
    ? setAlternate(null)
    : !isBig
    ? (() => {
        setIsDissolving(true); // Start the dissolving animation
        setTimeout(() => {
          setAlternate(altSrc);
          setTimeout(() => {
            setIsDissolving(false); // End the dissolving animation
            setTimeout(() => {
              setAlternate(null);
              setTimeout(() => {
                setRandomImage(getRandomImage()); // Change the random image
                shuffleCards(); // Shuffle the cards
              }, 3000); // Delay 3 seconds before changing the random image and shuffling the cards
            }, 2000); // Flip back to imageSrc after 2 seconds
          }, 75); // Duration of dissolving animation
        }, 100); // Delay before switching to altSrc
      })()
    : null;

  altSrc === randomImage && alternate === null
    ? (() => {
        setMatchCount(matchCount + 1);
        console.log(matchCount);
      })()
    : console.log("incorrect!");
};




const [cards,setCards] = useState(
  card_names
 
  )

  const randoms = {
    Sudo1,
    Sudo2,
    Sudo3,
    Turtwig,
    Piplup,
    Hitmonlee,
    Majikarp,
    Squirtle
  }

  const getRandomImage = () => {
    const randomKeys = Object.keys(randoms);
    const randomIndex = Math.floor(Math.random() * randomKeys.length);
    return randoms[randomKeys[randomIndex]];
  };
    
  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = getRandomImage();
      setRandomImage(randomImage);
      shuffleCards()
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [randomImage, setRandomImage] = useState(getRandomImage());

  const resultStyle = {
    transform: 'translate(450px,200px)',
    background: alternate === randomImage ?'green': alternate != randomImage && alternate != null? 'red':'grey',
    width: '200px',
    height: '150px'
   

  }

  const resultText = alternate === randomImage ? 'Correct!' : alternate != randomImage  && alternate!= null? 'Incorrect!' : 'Find the match!';
     

        return (
            <>

            <div className='object-card'
            >
              <p style={resultStyle}>{resultText}</p>
             
            <Card
            imageSrc={randomImage}/>
          </div>

            <div className='cardSet'
            >
              {cards.map((card) => (
                <Card
                imageSrc={card.imageSrc}
                onClick={()=>cardClick(card.imageSrc)}
                isBig={selectedImage === card.imageSrc}
                selectedImage={selectedImage}
                altSrc={card.altSrc}
                // style={{
                //   transition: 'transform 0.3s ease',
                //   transform: `translateX(${2 * 25}%)`,}}
                shiftClick={()=>handleShiftClick(card.altSrc,selectedImage === card.imageSrc)}
                altShown={alternate === card.altSrc}
                alternate={alternate}
                isDissolving={isDissolving}
                />
              ))}



           
</div>
{<p>{matchCount}</p>}
  {matchCount === 5 && (
    
    <p>Congratulations! You won the game!</p>
  )}
            </>
        )
    }



// export default CardSet;




const Game = () => {


  return (
    <>
    <CardSet/>
    {console.log("skii")}
</>
    
  )

}
export default Game

