import React, { useState } from 'react';

import Abu from '../images/aboubacar4.png';


const Card_Flip = (imageSrc) =>{


    return (
        <div className="container">
            <div className="card">
                <img src={Abu} className="front"
                height={'280px'}
                width={'200px'}
                />
                <div className='back'>Back of card!</div>
            </div>
        </div>
    )
}

export default Card_Flip