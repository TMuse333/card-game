// import React from 'react';

// const Card = ({ imageSrc, onClick, isBig, isSelected }) => {
//   const handleClick = () => {
//     onClick();
//   };

//   const cardStyle = {
//     transform: isBig ? 'scale(2.33)' : 'scale(1)',
//     position: isBig ? 'fixed' : 'static',
//     top: isBig ? '30%' : 'auto',
//     left: isBig ? '40%' : 'auto',
//     zIndex: isBig ? 1 : 'auto',
//     filter: selectedImage && selectedImage !== imageSrc ? 'blur(5px)' : 'none',
//     transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, filter 0.3s ease-in-out',
//   };

//   return (
//     <div className="card-container">
//       <img
//         src={imageSrc}
//         alt="img"
//         className="card"
//         style={cardStyle}
//         onClick={handleClick}
//       />
//     </div>
//   );
// };

// export default Card;
