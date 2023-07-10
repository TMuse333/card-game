 export const cardData = [
  "This is Aboubacar. he is my own custom character " 
  +"that I designed based off my own physique who I plan"
  +" to have as the main character in his own video game"+
  "one day. One of his main powers is his power to manipulate"
  +" the quantum realm and use it to his advantage to live true"
  +"to live true to nature and be as pure as they come",

  "This is Majin Vegeta. He is from the popular anime series"+
  " Dragon Ball Z. This is an alternative form of Vegeta, "+
  "who let himself be possesed by the evil wizard Babibidy"+
  "to gain more power, becoming Majin Vegeta, denoted by the letter"+
  " M on his forehead. \n This drawing took approximatley 8"+
  " hours to complete",

  "This is Obito Uchiha as the 10 tails Jinchuriki from the Naruto anime series "+
  "A jinchuriki is a human who has had a tailed beast sealed within him. "+
  "A tailed beasts are large powerful creatures with immense power and are sealed "+
  "within humans of their respective villages to maintain power."+
  " In this picture, Obito has absored all 9 tailed beasts within himself "+
  "to obtain an almost god like power",

  "This is Goku and Vegeta preforming a combo attack"+
  " This is one of my earlier drawings, and I would say this "+
  "was the last one of my pictures until I could produce a"+
  " higher quality of digital art, but I am still fond of this picture"+
  " Goku and Vegeta are two of my favourite anime character of all "+
  "time because of their relestless pursuit of getting stronger "+
  "and pushing your limits",

  "This is Sasuke Uchiha"
]

// (4.33%, 1%)

import React, { useState } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';



  /*  const flippedCards = () =>{

        const[selectedImage,setSelectedImage] = useState(null)

        const handleClick = (imageSrc) =>{
        
        selectedImage === imageSrc ? setSelectedImage(null) :
        setSelectedImage(imageSrc)

        }

return (
    <>

<div className="cardSet">

    <FlipCard
    imageSrc={Abu}
    onClick={() => handleClick(Abu)}
    isBig={selectedImage === Abu}
    selectedImage={selectedImage}
    text={cardData[0]}
    />
    <FlipCard
    imageSrc={MajinVegeta}
    onClick={() => handleClick(MajinVegeta)}
    isBig={selectedImage === MajinVegeta}
    selectedImage={selectedImage}
    text={cardData[1]}
    />
       <FlipCard
    imageSrc={Obito}
    onClick={() => handleClick(Obito)}
    isBig={selectedImage === Obito}
    selectedImage={selectedImage}
    text={cardData[2]}
    />

<FlipCard
    imageSrc={Saiyans}
    onClick={() => handleClick(Saiyans)}
    isBig={selectedImage === Saiyans}
    selectedImage={selectedImage}
    text={cardData[3]}
    />
    </div>
    </>
)



    }


export default flippedCards*/