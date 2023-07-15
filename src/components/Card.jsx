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


let previousRandomImage = null;

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

   // transform: isBig && !altShown &&!isDissolving? 'scale(2)' :
    // isHovered && selectedImage === null ?
     //'scale(1.2)' : !isBig && selectedImage != null && alternate === null && alternate === altSrc?
    // 'scale(0.75)' : null,
     transition: 'transform 0.3s ease, opacity 0.2s ease',
   //  filter:  selectedImage && selectedImage != imageSrc  &&!alternate &&!isDissolving? 'blur(5px)' : null,
   //  position: isBig && !altShown &&!isDissolving? 'fixed' : 'static',
    // top: isBig && !altShown &&!isDissolving? '35%' : 'auto%',
   //  left: isBig && !altShown &&!isDissolving? '43%' : 'auto%',
     opacity: isDissolving &&altShown? 0 : 1,
     boxShadow:  isHovered  && !selectedImage? '0 0 50px 25px gold' : 'none',
     transform: isHovered  && !selectedImage? 'scale(1.2)' : null
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
        const [errors, setErrors] = useState(0)
        const [isClicked, setIsClicked] = useState(false)
        const [transition, setTransition] = useState(false)
        
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

        const handleShiftClick = (altSrc, isBig) => {
          alternate === altSrc
            ? setAlternate(null)
            : !isBig
            ? (() => {
                setIsDissolving(true); 
                setIsClicked(true)
                setTimeout(() => {                                     
                  setAlternate(altSrc);
                  setTimeout(() => {
                    setIsDissolving(false); 
                 
                  }, 75); // Duration of dissolving animation
                }, 100); // Delay before switching to altSrc
              })()
            : null;
        
          altSrc === randomImage && alternate === null
            ? (() => {
                setMatchCount(matchCount + 1);
                
                setTimeout(()=>{
                  setRandomImage(getRandomImage()); // Change the random image
                  shuffleCards()
                  setSelectedImage(null)
                  console.log("Shuffle because of click")
                  setAlternate(null)
                  setIsClicked(false)
                  
                },4000)
               
                
                console.log(matchCount);
              })()
            : (()=>{
              setIsClicked(true)
              setErrors(errors + 1);
              setTimeout(()=>{
                setRandomImage(getRandomImage());
                 // Change the random image
                shuffleCards()
                setSelectedImage(null)
                console.log("Shuffle because of click")
                setAlternate(null)
                setIsClicked(false)
                
              },4000)

            })()
          setIsClicked(true); // Mark a card as clicked

         
        };


        useEffect(()=>{
          console.log(isClicked)
        },[isClicked])

        useEffect(() => {
          const interval = setInterval(() => {
            if (!isClicked) {
              setRandomImage(getRandomImage());
              setAlternate(null);
              shuffleCards();
              
              console.log("no clicking occured within 5s. is clicked = "+isClicked)
              
            }
          }, 10000);
        
          return () => {
            clearInterval(interval);
          };
        }, [isClicked]);
        
        





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
    let randomIndex = Math.floor(Math.random() * randomKeys.length);
    let randomImage = randoms[randomKeys[randomIndex]];
  
    // Check if the generated image is the same as the previous one
    while (randomImage === previousRandomImage) {
      randomIndex = Math.floor(Math.random() * randomKeys.length);
      randomImage = randoms[randomKeys[randomIndex]];
    }
  
    // Update the previousRandomImage variable
    previousRandomImage = randomImage;
  
    return randomImage;
  };
    
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTransition(false)
  //     if (!isClicked) {
  //       const randomImage = getRandomImage();
  //       setTransition(true)
  //       setRandomImage(randomImage);
  //       shuffleCards();
  //       setAlternate(null)
  //     }
  //   }, 5000);
  
  //   return () => clearInterval(interval);
  // }, [isClicked]); 
  
  const [randomImage, setRandomImage] = useState(getRandomImage());

  const resultStyle = {
    transform: 'translate(450px,200px)',
    background: alternate === randomImage ?'green': alternate != randomImage && alternate != null? 'red':'grey',
    width: '200px',
    height: '150px'
   

  }

  const resultText = alternate === randomImage ? 'Correct!' : alternate != randomImage  && alternate!= null? 'Incorrect!' : 'Find the match!';
     

const randomStyle = {
  boxShadow: transition? '0 0 50px 25px gold' : 'none',
}

const winningText = matchCount === 5 ? "Congratulations! You won the game" : null

        return (
            <>

            <div className='object-card'
            >
              <p style={resultStyle}>{resultText}</p>
             
            <Card
            imageSrc={randomImage}
            style={randomStyle}
            />
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
<div><p>{matchCount} &nbsp; {errors}</p>
<p>{winningText}</p></div>

  
  
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

