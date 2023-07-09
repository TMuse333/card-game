import MajinVegeta from '../images/majin-vegeta.png';
import React,{ useState } from 'react';

const Flipper = () =>{
    const[isClicked,setIsClicked] = useState(false)

    const handleClick = (event) =>{
        event.shiftKey ? setIsClicked(!isClicked) : null
    }


    const cardStyle={
        height: '23vw',
        width: '15vw',
      
    }


    return (
        <div className='container-f'>

<div className='the-card-f'>

<div className='the-front-f'> 

<img src={MajinVegeta}
style={cardStyle}
onClick={handleClick}/>

</div>

<div className='the-back-f'> back of card</div>



</div>

</div>
    )

}

export default Flipper;