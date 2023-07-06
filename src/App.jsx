import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import CardSet from './components/CardSet'
import { useCardState } from './components/usedCardState';




function App() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  

  const pageStyle = {
    filter: isClicked ? 'blur(3px)' : 'none', // Apply blur to the page when clicked
    transition: 'filter 0.3s ease-in-out',
  };

  return (
    <>
<div style={pageStyle} >

 <NavBar/>
 <CardSet onClick={handleClick} isClicked={isClicked}/>

 </div>
   
    </>
  )
}

export default App
