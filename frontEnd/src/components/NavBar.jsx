import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [fadeOutAnimation, setFadeOutAnimation] = useState(false);


  // Array containing your rules explanation
  const rules = [
    'In this card game, there are 8 cards, each card'+
    " has an alternative picture on the back of it, which can "+
    "be accessed by simply clicking on the desired card and can be "+
    "flipped back by reclicking it.",


    'When you click on the start button, the alternative image '+
    "that you must find will be displayed above the rows of cards. "+
    "Your task is to find the card that has that image on the back",


    "The quicker you correctly match the cards, the more points you get"+
    "taking too long to answer or an incorect selection 5 times "+
    "will result in you losing the game",


    'You have 1 minute to get as many matches as possible and the order of '+
    "the cards is randomized every turn. Every 5 turns you will also "+
    "have less time to make a selection, good luck!",

    "If you want to view the cards in more detail, you can hold shift and click or"+
    " double click on a card for it to be enlarged"
    // Add more rules as needed
  ];

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  };

  // Function to handle clicking "Show Rules" button and toggle the rules pop-up
  const toggleRules = () => {
    setShowRules((prevState) => !prevState);
  };

  // Function to handle clicking on "Next Rule" button
  const handleNextRule = () => {
    setCurrentRuleIndex((prevIndex) => (prevIndex + 1) % rules.length);
  };

  // Function to handle clicking on "Previous Rule" button
  const handlePrevRule = () => {
    setCurrentRuleIndex((prevIndex) => (prevIndex - 1 + rules.length) % rules.length);
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const handleBackToHome = () => {
    // Close the About pop-up when the "Back to Home" button is clicked
    setShowAbout(false);

    setFadeOutAnimation(true);

    setTimeout(() => {
      setShowAbout(false);
      // Reset the fadeOutAnimation state so that it can be triggered again if needed
      setFadeOutAnimation(false);
    }, 500); // Match the duration of the CSS transition (in milliseconds)
  

    
  };

  // Attach the event listener to the scroll event when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const aboutContentStyle = {
    backgroundImage: 'radial-gradient(circle, #a3a3a3, #37643d, #800080, #0e860e)',
    backgroundSize: '200% 200%',
    animation: 'quantum-animation 5s linear infinite',
    width: '100%',
    height: '50%',
    paddingTop: '20px',
    zIndex: '2099200',
    position: 'relative'
  };


  const aboutButtonStyle = {
    marginTop: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    animation: fadeOutAnimation ? 'fadeOut 1s ease' : null,
  };

 

  return (
    <>
      {/* Your banner */}
      <div className={`banner ${isScrolled ? 'scrollable' : ''}`}>
        <ul className="navLinks">
          <li>Thomas' card game</li>
          <li><a href="#" onClick={toggleAbout}>About</a></li>
          <li><a href="#">Other projects</a></li>
          <li>
            <button onClick={toggleRules}>Show Rules</button>
          </li>
        </ul>
      </div>

      {/* Rules pop-up */}
      {showRules && (
        <div className={showRules ? 'popup-show' : 'popup'}>
          <div className="popup-content">
            {/* Display the current rule */}
            <p>{rules[currentRuleIndex]}</p>
            <div className="popup-buttons">
              {/* Button to show the previous rule */}
              <button onClick={handlePrevRule} disabled={currentRuleIndex === 0}>
                Back
              </button>
              {/* Button to show the next rule */}
              <button onClick={handleNextRule} disabled={currentRuleIndex === rules.length - 1}>
                Next 
              </button>
              </div>
              {/* Button to close the rules pop-up */}
              <button onClick={toggleRules}
              style={{marginLeft:'auto',
                      marginRight:'auto',
                      transform: 'translateY(6rem)'}}>Close</button>
            
          </div>
        </div>
      )}

      {/* About pop-up */}
      {showAbout && (
  <div className="popup-show">
    <div className='about-content' style={aboutContentStyle}>
      <p>
        This is a simple card game to help develop my web developing skills.<br/>
        This is my first project and any feedback is greatly appreciated.<br/>
        You can look at the cards that happen to be my own art or play the game.<br/>
        The rules of the game can been seen by click on show rules
      </p>
      <button onClick={handleBackToHome} className="about-button">
        Back to Home
      </button>
    </div>
  </div>
    )}

      <header>{/* Your header content */}</header>
    </>
  );
};

export default NavBar;