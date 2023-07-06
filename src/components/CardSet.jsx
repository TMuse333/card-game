import React from 'react';
import Card from './Card';
import Abu from '../images/aboubacar4.png';
import MajinVegeta from '../images/majin-vegeta.png';
import Obito from '../images/obito_10TJ.jpg';
import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
import Sasuke from '../images/sasuke.jpg';
import Kakashi from '../images/kakashi_susanoo.jpg';
import Sainey from '../images/ss2_sainey.jpg';
import War_Obito from '../images/war_obito.jpg';

const CardSet = () => {
  const cards = [
    { value: 1, imageSrc: Abu },
    { value: 2, imageSrc:  MajinVegeta },
    { value: 3, imageSrc: Obito },
    { value: 4, imageSrc: Saiyans },
    { value: 5, imageSrc: Sasuke },
    { value: 6, imageSrc: Kakashi },
    { value: 7, imageSrc: Sainey },
    { value: 8, imageSrc: War_Obito },
  ];

  const clicker = (value) => {
    console.log(`Card ${value} was clicked`);
  };

  return (
    <>
      <div className="cardSet">
        {cards.map((card) => (
          <Card
            key={card.value}
            value={card.value}
            imageSrc={card.imageSrc}
            cardData={cards}
           onClick={() =>clicker(card.value)}
          />
        ))}
      </div>
    </>
  );
};

export default CardSet;
