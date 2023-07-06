import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import CardSet from './components/CardSet'
import { useCardState } from './components/usedCardState';




function App() {

  
  const { isHovered, isClicked, handleMouseEnter, handleMouseLeave, handleClick, isEnlarged } = useCardState();

  console.log('isClicked:', isClicked);
  
const pageStyle = {
  filter: isClicked  ? 'blur(5px)' : 'none',

}


 

  return (
    <>
<div class="main" style={pageStyle}>

 <NavBar/>
 <CardSet onClick={handleClick} isClicked={isClicked}/>
 </div>

   
    </>
  )
}

export default App
