import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  };

  // Attach the event listener to the scroll event when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Your banner */}
      <div className={`banner ${isScrolled ? 'scrollable' : ''}`}>

       <ul className="navLinks">
            <li>Thomas' card game</li>
            <li><a href="#">About</a></li>
            <li><a href="#">Other projects</a></li>
            <li><a href="#"
            onClick={toggleRules}>Rules of the game</a></li>
          </ul>
      </div>

      <>
      {/* Your banner */}
      <div className={`banner ${isScrolled ? 'scrollable' : ''}`}>
        <ul className="navLinks">
          <li>Thomas' card game</li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Other projects</a>
          </li>
          <li>
            <a href="#" onClick={toggleRules}> {/* Add onClick event */}
              Rules of the game
            </a>
          </li>
        </ul>
      </div>

      {/* Rules pop-up */}
      {showRules && (
        <div className="popup">
          <div className="popup-content">
            {/* Your rules explanation */}
            <p>Here are the rules of the game...</p>
            <button onClick={toggleRules}>Close</button>
          </div>
        </div>
      )}

      <header>{/* Your header content */}</header>
    </>

      <header>
       
          
      
      </header>
    </>
  );
};

export default NavBar;
