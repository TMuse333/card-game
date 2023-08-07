import React, { useState, useEffect, useRef } from 'react';

import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import War_Obito from '../images/war_obito.jpg';
import Vegeta from '../images/vegeta-battle.png'

import { cardData} from './cardData'


const CardDescription = ({selectedImage,isBig,scaleDown}) => {

    const textBoxStyle = {
        marginTop: '-5rem',
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '8px',
        background: 'linear-gradient(45deg, orange, red)',
        color: 'white',
        fontSize: '0.55rem',
        fontWeight: 'bold',
        display: isBig ? 'block' : 'none',
        width: '80vw',
        height: '4rem',
        Zindex: 9999999,
       
       
      };

    const text = selectedImage === Abu ? cardData[0] :
    selectedImage === MajinVegeta? cardData[1] :
    selectedImage === Obito? cardData[2] :
    selectedImage === Saiyans? cardData[3] :
    selectedImage === Sasuke? cardData[4] :
    selectedImage === Kakashi? cardData[5] :
    selectedImage === War_Obito? cardData[6] :
    selectedImage === Vegeta? cardData[7] : null


    const cardStyle = {
        transform: isBig? 'scale(3) translateY(-4rem)' : 'scale(0)',
        position:  'relative',
        height: '30vw',
        width: '19vw',
        maxHeight: '250px',
        maxWidth: '160px',
        Zindex: 100000,
        display: !isBig ? 'none' : 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        
        transition: 'transform 0.5s ease',
        // marginBottom: '-7rem'
    }

    


    return (

        <div>

        <img src={selectedImage}
        style={cardStyle}
        onClick={()=>{scaleDown()}}
     />

        <div style={textBoxStyle}>{text}</div>
        </div>
  
    )

}

export default CardDescription