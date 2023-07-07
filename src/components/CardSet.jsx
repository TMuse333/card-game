// import React, { useState } from 'react';
// import Card from './Card';
// import { cardsData } from './cardData';


// const CardSet = () => {
//   const [cards, setCards] = useState(cardsData);

//   const handleClick = (value) => {
//     setIsClicked(!isClicked);
//     const updatedCards = cards.map((card) => {
//       // Set isBig to true for all cards
//       return { ...card, isBig: true };
//     });
//     setCards(updatedCards);

//     updatedCards.forEach((card) => {
//       console.log(card.isBig);
//     });
//   };

//   // Set up cards before returning them
//   const renderedCards = cards.map((card) => (
//     <Card
//       key={card.value}
//       value={card.value}
//       imageSrc={card.imageSrc}
//       isBig={card.isBig}
//       onClick={null} // Pass the value of the card to the handleClick function
//     />
//   ));

//   return <div className="cardSet">{renderedCards}</div>;
// };

// export default CardSet;
