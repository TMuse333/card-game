import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar';
import QuantumBackground from './components/QuantumBackground';
import CardSet from './components/CardSet';
import Axios from 'axios'
import InputBar from './components/inputBar';


function App() {


  

  return (
    <>



      <NavBar />

   
      <QuantumBackground />
      <CardSet />
   
      
    
    </>
  );

}


export default App;
