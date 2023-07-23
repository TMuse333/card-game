import React from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg'
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp'

const ResultScreen = ({ win,score }) => {


const styles = {
    display: 'flex',
    height:  win !== null ? '46vw' : '0vw',
    width:  win !== null ? '93vw' : '0vw',
    marginTop: win !== null ? '5rem' : '0vw',
    transform: 'translate(-7%,-5rem)',
  // marginBottom: win !== null ? '5vw' : '0vw',
    zIndex: 50,
  
 //  alignItems: "center", // Center the content vertically
  //  justifyContent: "center",
   


}

  return (
   <>
        <img
          src={win ? gokuVsJiren : !win ? clown : null}
          style={styles}
        />
        <p>{win ? "You Win!" : !win && win !== null ? "You Lose!" : null}</p>
        </>
  );
};

export default ResultScreen;
