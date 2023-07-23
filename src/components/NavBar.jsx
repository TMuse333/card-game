import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
            <li><a href="#">Rules of the game</a></li>
          </ul>
      </div>

      <header>
       
          
      
      </header>
    </>
  );
};

export default NavBar;
