// import React, { useState } from 'react';
// import Card from './Card';

// import Abu from '../images/aboubacar4.png';
// import MajinVegeta from '../images/majin-vegeta.png';
// import Obito from '../images/obito_10TJ.jpg';
// import Saiyans from '../images/ssb_k20_goku_and_bssb_vegeta.jpg';
// import Sasuke from '../images/sasuke.jpg';
// import Kakashi from '../images/kakashi_susanoo.jpg';
// import Sainey from '../images/ss2_sainey.jpg';
// import War_Obito from '../images/war_obito.jpg';

// const CardSet = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleCardClick = (imageSrc) => {
//     if (selectedImage === imageSrc) {
//       setSelectedImage(null); // Return the image to its original size
//     } else if (!selectedImage) {
//       setSelectedImage(imageSrc); // Enlarge the clicked image
//     }
//   };

//   return (
//     <div className="cardSet">
//        <Card
//         imageSrc={Abu}
//         onClick={() => handleCardClick(Abu)}
//         isBig={selectedImage === Abu}
//         selectedImage={selectedImage}
//       />
//       <Card
//         imageSrc={MajinVegeta}
//         onClick={() => handleCardClick(MajinVegeta)}
//         isBig={selectedImage === MajinVegeta}
//         selectedImage={selectedImage}
//       />
//       <Card
//         imageSrc={Obito}
//         onClick={() => handleCardClick(Obito)}
//         isBig={selectedImage === Obito}
//         selectedImage={selectedImage}
//       />
//       <Card
//         imageSrc={Saiyans}
//         onClick={() => handleCardClick(Saiyans)}
//         isBig={selectedImage === Saiyans}
//         selectedImage={selectedImage}
//       />
//       <Card
//         imageSrc={Sasuke}
//         onClick={() => handleCardClick(Sasuke)}
//         isBig={selectedImage === Sasuke}
//         selectedImage={selectedImage}
//       />
//       <Card
//         imageSrc={War_Obito}
//         onClick={() => handleCardClick(War_Obito)}
//         isBig={selectedImage === War_Obito}
//         selectedImage={selectedImage}
//       />
//       <Card
//         imageSrc={Sainey}
//         onClick={() => handleCardClick(Sainey)}
//         isBig={selectedImage === Sainey}
//         selectedImage={selectedImage}
//       />
//       <Card
//         imageSrc={Kakashi}
//         onClick={() => handleCardClick(Kakashi)}
//         isBig={selectedImage === Kakashi}
//         selectedImage={selectedImage}
//       />
//       {/* Add more Card components with respective props */}
//     </div>
//   );
// };

// export default CardSet;
