
 
 export const cardData = [
  "This is Aboubacar. he is my own custom character " 
  +"that I designed based off my own physique who I plan"
  +" to have as the main character in his own video game"+
  "one day. One of his main powers is his power to manipulate"
  +" the quantum realm and use it to his advantage to live true"
  +"to live true to nature and be as pure as they come",
  "This is Majin Vegeta"
]

export const cardStyle = {
  height: '23vw',
  width: '15vw',
  maxHeight: '400px',
  maxWidth: '260px',
  transform: isBig ? 'scale(2)' :
   isHovered && selectedImage === null ?
   'scale(1.2)' : !isBig && selectedImage != null ?
   'scale(0.75)' : null,
   transition: 'transform 0.3s ease',
   filter: selectedImage && selectedImage != imageSrc ?
   'blur(5px)' : null,
   position: isBig? 'fixed' : 'static',
   top: isBig ? '35%' : null,
   left: isBig ? '43%' : null,
  }