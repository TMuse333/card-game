import React, { useState, useEffect, useRef } from 'react';

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
import gokuVsJiren from '../images/goku-vs-jiren.jpg'
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp'
import ResultScreen
 from './ResultScreen';


import { card_names } from './cardData';

import { cardData} from './cardData'


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
      isBig && selectedImage === Sainey && gameOver? 'scale(3) translate(-61%,-25%)'  :
      correct && altShown ? 'scale(1.5)' : null,
     // zIndex: correct && altShown ? 1000 : 0,

     border: '2px solid black',
     animation: gameOver && !isBig &&isHovered ? 'shake 2s infinite'
     : correct && altShown && !gameOver? 'moveAndScale 1s 1' :
     incorrect && altShown && !gameOver? 'shakeAndScale 0.5s 1' : 'none' ,
   
   
    }


    const mergedStyle = { ...cardStyle, ...additonalStyle}

    const textBoxStyle = {
      position: 'absolute',
      top: '235%', // Position the text box at the bottom of the card
      left: '250%', // Center the text box horizontally relative to the image
      transform: 'translateX(-50%)', // Center the text box horizontally relative to the image
      padding: '8px',
      background: 'linear-gradient(45deg, orange, red)',
      color: 'white',
      fontSize: '1rem',
      fontWeight: 'bold',
      display: isBig ? 'block' : 'none',
      width: '80vw', // Show the text box when the card is enlarged (isBig=true)
    };
  

//window.innerWidth, window.innerHeight for things based off screenSize

  

  return (

   

    <div className='card-container'
    style=
    {{ position: 'relative', zIndex: isBig || isHovered && selectedImage === imageSrc || (correct && altShown) ? 1 : 0 ,
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
    const CardSet = () =>{
        const [selectedImage,setSelectedImage] = useState(null)
        const [alternate, setAlternate] = useState(null)
        const [isDissolving, setIsDissolving] = useState(false)
        const [matchCount,setMatchCount] = useState(0)
        const [errors, setErrors] = useState(0)
        const [isClicked, setIsClicked] = useState(false)
        const [transition, setTransition] = useState(false)
        const [gameOver, setGameOver] = useState(true)
        const [progress, setProgress] = useState(0)
        const [filling, setFilling] = useState(true)
        const [win, setWin] = useState(null)
        const[originalOrder, setOriginalOrder] = useState([...card_names.map((_,index)=>index)])
        const [cardClickCount, setCardClickCount] = useState(0);

        let limit = 4

        const startTimeRef = useRef(Date.now());
        
      

        const startGame = () =>{
          setGameOver(false)
          setErrors(0)
          setWin(null)
          setMatchCount(4)
          setProgress(0)
          setFilling(true)
          setIsClicked(false)
          setSelectedImage(null)
          setAlternate(null)
          setScore(0)
          
          
        }


        const shiftClick = (imageSrc) => {
            selectedImage === imageSrc ?
            setSelectedImage(null) : setSelectedImage(imageSrc)
        }

        

        const endGame = () =>{
          setGameOver(true)
        }
        const [slow, setTooSlow] = useState(false)


        const shuffleCards = () => {

          // if (changeVar && !selectedImage){

          
          const shuffledCards = [...cards];
          for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
          }
          setCards(shuffledCards);
          setCorrect(null)
          setIncorrect(null)
          
          setOriginalOrder([...originalOrder])
            
        };

        const [correct,setCorrect] = useState(null)
        const [incorrect, setIncorrect] = useState(null)
        const [score,setScore] = useState(0)

        const handleClick = (altSrc, isBig) => {

         const currentTime = Date.now();
  const elapsedTime = currentTime - startTimeRef.current;
  const maxIntervalDuration = 10000; // The maximum interval duration in milliseconds
  const intervalReduction = Math.floor(cardClickCount / 5) * 2000;
  const intervalDuration = Math.max(maxIntervalDuration - intervalReduction, 1000); // Minimum interval duration of 1000ms
  const timePercentage = 1 - (elapsedTime / intervalDuration);
  const maxPoints = 100; // The maximum points that can be earned for answering quickly

  

  let pointsEarned = Math.floor(maxPoints * timePercentage);
  pointsEarned = Math.max(pointsEarned, 0);

          setCardClickCount(cardClickCount + 1)

          gameOver ?(()=>{
            setAlternate(null) 
            return
          })() : null 

        setAlternate(altSrc) 
        setProgress(0)

        setCorrect(null);
          setIncorrect(null);
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
                setCorrect(true)
               setScore(score + pointsEarned)
               console.log(pointsEarned)
               
                matchCount === limit ? (()=>{
                endGame()
                setWin(true)
                setProgress(0)
                })() : null
               

                
                
                setTimeout(()=>{
                  setRandomImage(getRandomImage()); // Change the random image
                  shuffleCards()
                  setSelectedImage(null)
                  console.log("Shuffle because of click")
                  setAlternate(null)
                  setIsClicked(false)
                  
                },2000)
               
                
                console.log(matchCount);
              })()
            : !isClicked  && !gameOver ?(()=>{
              setIsClicked(true)
              setErrors(errors + 1);
              setIncorrect(true)
              errors === 4 ? (()=>{
                setGameOver(true)
                setWin(false)
                setProgress(0)
               })() : null
              setTimeout(()=>{
                setRandomImage(getRandomImage());
                 // Change the random image
                shuffleCards()
                setSelectedImage(null)
                console.log("Shuffle because of click")
                setAlternate(null)
                setIsClicked(false)
                
              },2000)

            })() :null
             
          setIsClicked(true);
          
        

         
        };


      

       

       

       
        useEffect(() => {
          startTimeRef.current = Date.now();
          const baseIntervalDuration = 10000;
  const intervalReduction = Math.floor(cardClickCount / 5) * 2000;
  const intervalDuration = Math.max(baseIntervalDuration - intervalReduction, 1000); // Minimum interval duration of 1000ms
       
           // Interval duration in milliseconds
        
          let startTime = Date.now(); // Track the start time
        
          const interval = setInterval(() => {
            if (!isClicked && !gameOver) {
              
              setFilling(true)
              const currentTime = Date.now();
              const elapsedTime = currentTime - startTime;
              const progress = (elapsedTime / intervalDuration) * 100;
              setTooSlow(false)

         
        
              if (elapsedTime >= intervalDuration+1000) {
                
                setRandomImage(getRandomImage());
                setAlternate(null);
                shuffleCards();
                setErrors(errors + 1);

               /* errors === 4 ? (()=>{
                  endGame()
                  setWin(false)
                  setProgress(0)
                  return
                 })() : null*/
                 
                 setTooSlow(true)
                startTime = currentTime;  
                setFilling(false) 
                setProgress(0); 
              }
              // setTooSlow(false)
              setProgress(progress);
              
             
            }
          }, 1000); 
        
          return () => {
           
            clearInterval(interval);
          };
         
        }, [isClicked, gameOver, errors,filling,slow]);


        const resetToOriginalOrder = () => {
          setCards([...card_names]);
          setCorrect(null);
          setIncorrect(null);
          setOriginalOrder([...originalOrder]);
         
        };

        const progressStyle = {
  
          height: '100%',
          backgroundColor: 'green',
          transition: 'width 1s linear',
          overflow: 'hidden'
        }
      
        const declineStyle = {
          height: '100%',
          backgroundColor: 'red',
          transition: 'none'
        }
        
        
        




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
    
  const homeScreen = () => {
    setWin(null)
    setScore(0)
    setErrors(0)
    setWin(null)
    setMatchCount(0)
    setProgress(0)
    setFilling(true)
    
    setAlternate(null)
    resetToOriginalOrder()
  }
  
  const [randomImage, setRandomImage] = useState(getRandomImage());

  const resultStyle = {
    transform: gameOver ? 'translate(450px,200px) scale(0)' : 'translate(450px,200px)',
    background: correct  && !gameOver?'green': incorrect ? 'red':'grey',
    width: '200px',
    height: '150px',
    animation: !gameOver? 'shake 0.5s' : 'none',
    animationIterationCount: 'infinite',

   

  }

  const resultText = alternate === randomImage  && !gameOver ? 'Correct!' : alternate != randomImage  && alternate!= null  && !gameOver? 'Incorrect!' :slow ?'Too slow!' : 'Find the match!';
     

const randomStyle = {
  boxShadow:  '0 0 50px 25px red' ,
  transform: gameOver ? 'scale(0)' : null,
}

const winningText = matchCount >= limit + 1 ? "Congratulations! You won the game" : errors >= 5? "You have lost the game!" : null

const winningTextStyle = {
  //animation: gameOver && win !== null ? 'flash 3s infinite' : 'none',
  transition: 'color 0.3s ease',
  color: gameOver && win ? 'black' : errors >= 5 ? 'red' : 'black',
  transform: gameOver && win !== null ? 'scale(2)' : 'scale(0)',
  background:  'linear-gradient(45deg, #00FFFF, #0000FF)' ,
  width: '8rem',
  height: '75px',
  animation: 'pulse 2s infinite',
  zIndex:20,
  display: 'flex',
  marginTop: '-3rem'

  //position: 'fixed',
  //top: '79%',
  //left: '43%',
  



};









const additionalCardStyle = {
  transform: correct  ? 'scale(1.5)' : incorrect ? 'scale(0.5)' : 'scale(1)',
  zIndex: correct ? 1000 : 0,
  boxShadow: correct ? '0 0 25px 25px green' : incorrect ? '0 0 25px 25px red' : null
};

const scoreText = gameOver && win === null ? null : win  || !win? null : "score: "+ score

 




// 

//winningImgStyle.animationName = explodeAnimation;



        return (
            <>

<div className={gameOver? 'object-card-gameOver' : 'object-card'}
            >

            <Card
            additonalStyle={additionalCardStyle}
            imageSrc={randomImage}
            style={randomStyle}
            gameOver={gameOver}
            />
            <p className={gameOver? 'object-card-gameOver' : 'object-text'}> {scoreText}</p>
          </div>

 



<button onClick={()=>startGame()}
className={!gameOver ? 'no-show' : win !== null ? 'start-button-gameOver' : 'start-button'}
                      >
  Start game!</button>

 

      <button className={win!== null ? 'home-button' : 'no-show'}
onClick={()=>homeScreen()}>Home screen</button>

  <div className="progress-bar"
  style={{transform: gameOver? 'scale(0)' : 'scale(1)'}}>
  <div
    className="progress-bar-filled"
    style={filling ? { ...progressStyle, width: `${progress}%` } : { ...declineStyle, width: `${progress}%` }}
  ></div>

</div>




   
        

           

            <div className={matchCount >=limit + 1 || errors >=5 ? 'cardSetGameOver' : 'cardSet'}
            >

             
              {cards.map((card) => (
               
                <Card
              
                imageSrc={card.imageSrc}
             //  onClick={()=>cardClick(card.imageSrc)}
                isBig={selectedImage === card.imageSrc}
                selectedImage={selectedImage}
                altSrc={card.altSrc}
               // hoverEnterFunction={()=>handleHover(card.imageSrc)}
             /*   additonalStyle={{
                transform: cardHovered ? 'scale(1.2)' : 'scale(1)',
                             boxShadow: correct && alternate === card.altSrc ? '0 0 25px 25px green' : 'auto'}}*/
                onClick={()=>handleClick(card.altSrc,selectedImage === card.imageSrc)}
                altShown={alternate === card.altSrc && selectedImage != card.imageSrc}
                alternate={alternate}
                isDissolving={isDissolving}
                shiftClick={()=>shiftClick(card.imageSrc)}
                gameOver={gameOver}
                correct={correct}
                incorrect={incorrect}
                text={cardData[0]}
               
                
                
                />
              ))}



           
</div>
<div className={`scoreboard-container ${gameOver ? 'gameOver' : ''}`}>
<p className='scoreboard-text'>
  <span style={{ color: 'green' }}>{matchCount}</span>
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  <span style={{ color: 'red' }}>{errors}</span>
  &nbsp;
</p>

      </div>

             <ResultScreen
    win={win}
    score={score}
    />
   
  
  
            </>
        )
    }



 export default CardSet;




const Game = () => {


  return (
    <>
    <CardSet/>
   
    {console.log("skii")}
    {console.log(window.innerWidth)}
</>
    
  )

}
