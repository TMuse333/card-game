import React, { useState, useEffect } from 'react';



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

  const handleShiftClick = () =>{
       
     shiftClick()
    
        }

  const cardStyle = {
    height: '23vw',
    width: '15vw',
    maxHeight: '250px',
    maxWidth: '160px',

  
     transition: 'transform 0.3s ease, opacity 0.2s ease',
   
     opacity: isDissolving &&altShown? 0 : 1,
     boxShadow:  isHovered  && !selectedImage? '0 0 50px 25px red' : 'none',
     transform: isHovered  && !selectedImage? 'scale(1.2)' : null,
     border: '2px solid black'
   
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
        onClick={() => {
            handleClick();
            handleShiftClick()
            
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
        const [matchCount,setMatchCount] = useState(3)
        const [errors, setErrors] = useState(0)
        const [isClicked, setIsClicked] = useState(false)
        const [transition, setTransition] = useState(false)
        const [gameOver, setGameOver] = useState(true)
        const [progress, setProgress] = useState(0)
        const [filling, setFilling] = useState(true)
        
        const cardClick = (imageSrc) =>{
            selectedImage === imageSrc ? setSelectedImage(null): 
            !selectedImage? setSelectedImage(imageSrc) : null
            setProgress(0)
        }

        const startGame = () =>{
          setGameOver(false)
          setErrors(0)
          setMatchCount(0)
          
        }

        const endGame = () =>{
          setGameOver(true)
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
          alternate === altSrc && gameOver 
            ? setAlternate(null)
            : !isBig && !alternate 
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
        
          altSrc === randomImage && alternate === null && !isClicked && !gameOver
            ? (() => {
                setMatchCount(matchCount + 1);

               matchCount === 4 ? endGame() : null
               

                
                
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
            : !isClicked  && !gameOver ?(()=>{
              setIsClicked(true)
              setErrors(errors + 1);
              errors === 4 ? setGameOver(true) : null
              setTimeout(()=>{
                setRandomImage(getRandomImage());
                 // Change the random image
                shuffleCards()
                setSelectedImage(null)
                console.log("Shuffle because of click")
                setAlternate(null)
                setIsClicked(false)
                
              },4000)

            })() :null
             
          setIsClicked(true); // Mark a card as clicked

         
        };


        useEffect(()=>{
          console.log(isClicked)
        },[isClicked])

       

       



        useEffect(() => {
          const intervalDuration = 10000; // Interval duration in milliseconds
        
          let startTime = Date.now(); // Track the start time
        
          const interval = setInterval(() => {
            if (!isClicked && !gameOver) {
              setFilling(true)
              const currentTime = Date.now();
              const elapsedTime = currentTime - startTime;
              const progress = (elapsedTime / intervalDuration) * 100;
        
              if (progress >= 100) {
              
                setRandomImage(getRandomImage());
                setAlternate(null);
                shuffleCards();
                setErrors(errors + 1);
                startTime = currentTime;
                setFilling(false) // Reset the start time for the next interval
              }
        
              setProgress(progress);
            }
          }, 1000); // Interval duration is changed to 1 second (1000 milliseconds)
        
          return () => {
            clearInterval(interval);
          };
        }, [isClicked, gameOver, errors,filling]);
        
        
        




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
    
  
  const [randomImage, setRandomImage] = useState(getRandomImage());

  const resultStyle = {
    transform: gameOver ? 'translate(450px,200px) scale(0)' : 'translate(450px,200px)',
    background: alternate === randomImage  && !gameOver?'green': alternate != randomImage && alternate != null && !gameOver? 'red':'grey',
    width: '200px',
    height: '150px',

   

  }

  const resultText = alternate === randomImage  && !gameOver ? 'Correct!' : alternate != randomImage  && alternate!= null  && !gameOver? 'Incorrect!' : 'Find the match!';
     

const randomStyle = {
  boxShadow:  '0 0 50px 25px red' ,
  transform: gameOver ? 'scale(0)' : null,
}

const winningText = matchCount >= 5 ? "Congratulations! You won the game" : errors >= 5? "You have lost the game!" : null

const winningTextStyle = {
  animation: gameOver && matchCount >= 5 ? 'flash 3s infinite' : 'none',
  transition: 'color 0.3s ease',
  color: matchCount >= 5 ? 'green' : errors >= 5 ? 'red' : 'black',
  transform: matchCount >= 5 ? 'scale(2)' : 'scale(0)',
  background: matchCount >= 5 ? 'lightPurle' : null,
  width: '15vw',
  height: '75px',
  zIndex:20,
  position: 'fixed',
  top: '50%',
  left: '40%',




};


const progressStyle = {
  
    height: '100%',
    backgroundColor: 'green',
    transition: 'width 1s linear',
  }

  const declineStyle = {
    height: '100%',
    backgroundColor: 'green',
    transition: 'none'
  }



useEffect(()=>{
 
gameOver ? console.log("game over playa") : null

},[gameOver])

        return (
            <>
<button onClick={()=>startGame()}
className={!gameOver ? 'no-show' : 'start-button'}
                      >
  Start game</button>

  <div className="progress-bar">
  <div
    className="progress-bar-filled"
    style={filling ? { ...progressStyle, width: `${progress}%` } : declineStyle}
  ></div>
</div>



            <div className={gameOver? 'object-card-gameOver' : 'object-card'}
            >
              <p style={resultStyle}>{resultText}</p>
             
            <Card
            imageSrc={randomImage}
            style={randomStyle}
            />
          </div>

            <div className={matchCount >=5 || errors >=5 ? 'cardSetGameOver' : 'cardSet'}
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
<p style={winningTextStyle}>{winningText}</p></div>

  
  
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