import React from 'react';
import gokuVsJiren from '../images/goku-vs-jiren.jpg'
import clown from '../images/Emoji_Icon_-_Clown_emoji_1024x1024.png.webp'

const ResultScreen = ({ win,score }) => {


const styles = {
    height:  win !== null ? '38vw' : '0vw',
    width:  win !== null ? '75vw' : '0vw',
    marginTop: win !== null ? '5rem' : '0vw',
    marginBottom: win !== null ? '5vw' : '0vw',

    

}

  return (
    <div className="result-screen">
      <img
        src={win ? gokuVsJiren : !win ? clown : win === null ? null : null}
       
        style={styles}
      />
      <p>{win ? 'You Win!' : !win && win != null ? 'You Lose!': null}</p>
    </div>
  );
};

export default ResultScreen;
