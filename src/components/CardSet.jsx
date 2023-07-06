
import Card from './Card'
import Abu from '../images/aboubacar4.png'
import MajinVegeta from '../images/majin-vegeta.png'
import Obito from '../images/obito_10TJ.jpg'
import Tobi from '../images/tobi.jpg'
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg'
import Sasuke from '../images/sasuke.jpg'
import Kakashi from '../images/kakashi_susanoo.jpg'
import Sainey from '../images/ss2_sainey.jpg'
import War_Obito from '../images/war_obito.jpg'


const CardSet = ({onClick,isClicked}) =>{

    const handleCardClick = (value) =>{
        console.log('card ${value} was clicked');
        onClick(value)
    }

    return (
        <>



    <div className="cardSet">

       <Card value={1} imageSrc={Abu} onClick={handleCardClick} isClicked={isClicked}/>
        <Card value={2} imageSrc={MajinVegeta} onClick={handleCardClick} isClicked={isClicked}/>
        <Card value={3} imageSrc={Obito} onClick={handleCardClick} isClicked={isClicked}/>
        <Card value={4} imageSrc={Saiyans} onClick={handleCardClick} isClicked={isClicked}/>
        <Card value={5} imageSrc={Sasuke} onClick={handleCardClick} isClicked={isClicked}/>
        <Card value={6} imageSrc={Kakashi} onClick={handleCardClick} isClicked={isClicked}/>
        <Card value={7} imageSrc={Sainey} onClick={handleCardClick} isClicked={isClicked}/>
        <Card value={8} imageSrc={War_Obito} onClick={handleCardClick} isClicked={isClicked}/>

        </div>
        
        </>
    )
}

export default CardSet