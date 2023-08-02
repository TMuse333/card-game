import React, { useState, useEffect, useRef } from 'react';

import Sudo1 from '../images/pokemon-sudowoodo.gif'
import Sudo2 from '../images/3b82c72924a818c910bd4fd3b8557dc8fed0f14d_hq.gif'
import Sudo3 from '../images/pokemon-sudowoodo-2.gif'
import Piplup from '../images/piplup-excited.gif'
import Turtwig from '../images/pokémon-turtwig.gif'
import Hitmonlee from '../images/pokémon-hitmonlee.gif'
import Squirtle from '../images/giphy.gif'
import Majikarp from '../images/pokemon-magikarp.gif'
import ResultScreen from './ResultScreen';
import CountdownTimer from './CountDown';

 import Card from './Card';


import { card_names } from './cardData';

import { cardData} from './cardData'

import StartButton from './StartButton'




let previousRandomImage = null;

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
    const [countdown, setCountdown] = useState(3);
    const [startClicked, setStartClicked] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    const [showIncorrect, setShowIncorrect] = useState(false);
    const [showSlow,setShowSlow] = useState(false)
    const [remainingTime, setRemainingTime] = useState(20);
    const [timer,setTimer] = useState(false)
    const [showResult,setShowResult] = useState(true)

    let limit = 4

    const startTimeRef = useRef(Date.now());
    
  

    const startGame = () => {
      //   // Set the gameOver state to false after a 3-second delay
        setStartClicked(true);
        setRemainingTime(20)
        setTimeout(() => {
          setGameOver(false);
          setTimer(true)
        }, 3000);


     
      
        // Check if win is not null
        // if (win !== null) {
         
        //   setTimeout(() => {
        //     setErrors(0);
        //     setWin(null);
        //     setMatchCount(0);
        //     setProgress(0);
        //     setFilling(true);
        //     setIsClicked(false);
        //     setSelectedImage(null);
        //     setAlternate(null);
        //     setScore(0);
        //     setStartClicked(true)
            
        //   }, 3000);
        // } 
        
          setErrors(0);
          setWin(null);
          setMatchCount(0);
          setProgress(0);
          setFilling(true);
          setIsClicked(false);
          setSelectedImage(null);
          setAlternate(null);
          setScore(0);
          
         
        

       

        

        setTimeout(()=>{
          setWin(true)
          endGame()
          setProgress(0)
          setTimer(false)
          console.log("timer went off!")
        }, 63500)
      
      };
    
    
    


    const shiftClick = (imageSrc) => {
        selectedImage === imageSrc ?
        setSelectedImage(null) : setSelectedImage(imageSrc)
    }

    const initialState = {
      gameOver: true,
      win: null,
      score: 0,
      errors: 0,
      matchCount: 0,
      progress: 0,
      filling: true,
      selectedImage: null,
      alternate: null,
      isClicked: false,
      showCorrect: false,
      showIncorrect: false,
      showSlow: false,
      remainingTime: 30,
      timer: false,
      loss: null,
      // Add other initial state values here
    };

    

    const endGame = () =>{
    
      // If you have additional states to reset, add them here
    
     setGameOver(true)
     

    }
    const [slow, setTooSlow] = useState(false)


    const shuffleCards = () => {


      
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


    const [points, setPoints] = useState(0)

    const handleClick = (altSrc, isBig) => {

  

     const currentTime = Date.now();
const elapsedTime = currentTime - startTimeRef.current;
const maxIntervalDuration = 10000; // The maximum interval duration in milliseconds
const intervalReduction = Math.floor(cardClickCount / 5) * 2000;
const intervalDuration = Math.max(maxIntervalDuration - intervalReduction, 1000); // Minimum interval duration of 1000ms
const timePercentage = 1 - (elapsedTime / intervalDuration);
const maxPoints = 100; // The maximum points that can be earned for answering quickly



let pointsEarned =  Math.floor(maxPoints * timePercentage)
pointsEarned = Math.max(pointsEarned, 0)


      setCardClickCount(cardClickCount + 1)

   

   selectedImage === null ?  setAlternate(altSrc) : null
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
            setPoints(pointsEarned)
          
            setShowCorrect(true); // Show "Correct" message
            setTimeout(() => {
              setShowCorrect(false); // Hide "Correct" message after 1 second
            }, 2000);

           
        
           

            
            
            setTimeout(()=>{
              setRandomImage(getRandomImage()); // Change the random image
              shuffleCards()
              setSelectedImage(null)
              
              setAlternate(null)
              setIsClicked(false)
              
            },2000)
           
            
            console.log(matchCount);
          })()
        : !isClicked  && !gameOver ?(()=>{
          setIsClicked(true)
          setErrors(errors + 1);
          setIncorrect(true)
          setShowIncorrect(true); // Show "Incorrect" message
      setTimeout(() => {
        setShowIncorrect(false); // Hide "Incorrect" message after 1 second
      }, 2000);
          
          errors === 4 ? (()=>{
            setGameOver(true)
           
            
            setWin(false)
            setProgress(0)
           })() : null
          setTimeout(()=>{
            setRandomImage(getRandomImage());
             
           shuffleCards()
            setSelectedImage(null)
            console.log("Shuffle because of click")
            setAlternate(null)
            setIsClicked(false)
            
          },2000)

        })() :null
         
      setIsClicked(true);

   

      

    };

    
//progress bar

    useEffect(() => {
      startTimeRef.current = Date.now();
      const baseIntervalDuration = 10000;
const intervalReduction = Math.floor(cardClickCount / 5) * 2000;
const intervalDuration = Math.max(baseIntervalDuration - intervalReduction, 1000); // Minimum interval duration of 1000ms
   
       // Interval duration in milliseconds
    
      let startTime = Date.now(); // Track the start time
    
      const interval = setInterval(() => {
        if (!isClicked && !gameOver) {
          setShowSlow(false)
         // setFilling(true)
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
          const progress = (elapsedTime / intervalDuration) * 100;
          setTooSlow(false)

     
    
          if ((elapsedTime >= intervalDuration+1000)) {
            
            setRandomImage(getRandomImage());
            setAlternate(null);
            shuffleCards();
            setErrors(errors + 1);

            errors === 4 ? (()=>{
              endGame()
              setWin(false)
              setProgress(0)
              return
             })() : null
             
             setTooSlow(true)
             setShowSlow(true)
            startTime = currentTime;  
            setFilling(false) 
            setProgress(0); 
          }
          // setTooSlow(false)
          setProgress(progress);
          setFilling(true)
          
         
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


    useEffect(() => {
      if (startClicked) {
        let timeLeft = 3;
        const countdownInterval = setInterval(() => {
          timeLeft -= 1;
          setCountdown(timeLeft);
  
          if (timeLeft === 0) {
            clearInterval(countdownInterval);
            startGame(); // Call the startGame function after the countdown
          }
        }, 1000);
  
        // Clean up the interval when the component unmounts or when the countdown reaches zero
        return () => clearInterval(countdownInterval);
      }
    }, [startClicked]); 





    const progressStyle = {
      //width 1s linear
      height: '100%',
      backgroundColor: 'green',
      transition: filling? 'width 1s linear' : 'width 1s linear',
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

while (randomImage === previousRandomImage) {
  randomIndex = Math.floor(Math.random() * randomKeys.length);
  randomImage = randoms[randomKeys[randomIndex]];
}


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
setShowResult(false)

setAlternate(null)
setTimeout(()=>{
  resetToOriginalOrder()
},800)




}

const [randomImage, setRandomImage] = useState(getRandomImage());

// const points = handleClick(selectedImage,false)

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


};


const additionalCardStyle = {
transform: correct  ? 'scale(1.2)' : incorrect ? 'scale(0.5)' : 'scale(1)',
zIndex: correct ? 1000 : 0,
boxShadow: correct ? '0 0 25px 25px green' : incorrect ? '0 0 25px 25px red' : null
};

const scoreText = gameOver && win === null ? null : win  || !win? null : "score: "+ score







// useEffect(() => {
//   let shuffleInterval;

  
//     // Set an interval to shuffle the cards every 3 seconds




    return (
        <>

        

<div className={gameOver? 'object-card-gameOver' : 'object-card'}
        >
          <CountdownTimer
        gameOver={timer}
        win={win}
        duration={remainingTime}/>



{showCorrect &&  <div className="correct"
 style={{zIndex:9000}}>Correct! + {points}</div>}
 {showIncorrect && <div className="incorrect"
style={{zIndex:9000}}>Incorrect!</div>}

{showSlow && <div className="too-slow" style={{ zIndex: 9000 }}>Too Slow!</div>}

        <Card
        additonalStyle={additionalCardStyle}
        imageSrc={randomImage}
        style={randomStyle}
        gameOver={gameOver}
        isBig={false}
        />
        <p className={!gameOver && win === null ? 'points-text' : 'no-show'}>{score}</p>
        <p className={gameOver? 'object-card-gameOver' : 'object-text'}> {scoreText}</p>
      </div>



    




     
   

      { (startClicked && countdown > 0)  && <div className="countdown-text">{countdown}</div>}

      <button
       onClick={
        ()=>startGame()}
       className={!gameOver ? 'no-show' : win !== null ? 'start-button-gameOver' : 'start-button'}
     >
       Start game!
     </button>



  <button className={win!== null ? 'home-button' : 'no-show'}
onClick={()=>homeScreen()}>Home screen</button>

{/* <div className="progress-bar"
style={{transform: gameOver? 'scale(0)' : 'scale(1)'}}>
<div
className="progress-bar-filled"
style={filling ? { ...progressStyle, width: `${progress}%` } : { ...declineStyle, width: `${progress}%` }}
></div>

</div> */}




 
    

       

        <div className={ errors >=5 || win? 'cardSetGameOver' : 'cardSet'}
        >

         
          {cards.map((card,i) => (
           
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
            text={cardData[i]}
           
            
            
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
showResult={showResult}
/>



        </>
    )
}



export default CardSet;