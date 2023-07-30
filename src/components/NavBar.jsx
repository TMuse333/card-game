import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0); // Track the index of the currently displayed rule

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
    "have less time to make a selection, good luck!"
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
                Previous Rule
              </button>
              {/* Button to show the next rule */}
              <button onClick={handleNextRule} disabled={currentRuleIndex === rules.length - 1}>
                Next Rule
              </button>
              {/* Button to close the rules pop-up */}
              <button onClick={toggleRules}
              style={{transform: 'translateX(5rem)'}}>Close</button>
            </div>
          </div>
        </div>
      )}

      <header>{/* Your header content */}</header>
    </>
  );
};

export default NavBar;
