import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [navWidth, setNavWidth] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add a resize event listener to update the windowWidth when the window is resized.
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggleHamburger() {
    setHamburgerClicked((prev) => !prev);
    // If the navigation is closing, smoothly animate the width to 0
    if (hamburgerClicked) {
      animateWidth(0);

    } else {
      // If the navigation is opening, smoothly animate the width to the desired value (70% in this case)
      animateWidth(navRef.current.scrollWidth);
    }
  }

  // Function to smoothly animate the width using requestAnimationFrame
  function animateWidth(targetWidth) {
    const startWidth = navWidth;
    const duration = 400; // Animation duration in milliseconds
    const startTime = performance.now();

    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        const newWidth = startWidth + (targetWidth - startWidth) * (elapsedTime / duration);
        setNavWidth(newWidth);
        requestAnimationFrame(step);
      } else {
        setNavWidth(targetWidth);
      }
    }

    requestAnimationFrame(step);
  }

  return (
    <div className='header'>
      <div className='logo'>REALCO</div>
      {windowWidth <= 800 ? (
        <>
          <div className="menu">
            <label  htmlFor="menu-btn">MENU</label>
            <button id='menu-btn'
              className={`hamburger `}
              onClick={toggleHamburger}
            >
              
              <div className="bar"></div>
            </button>
          </div>
          

          <nav
            ref={navRef}
            className={`mobile-nav-links ${hamburgerClicked ? 'open' : 'closed'}`}
            style={{ width: `${navWidth}px` }}
          >
            <span class="material-symbols-outlined close-btn" onClick={toggleHamburger}>
                close
                </span>
            <a href='#overview' onClick={toggleHamburger}>Overview</a>
            <a href='#features' onClick={toggleHamburger} >Features</a>
            <a href='#photos' onClick={toggleHamburger}>Photos</a>
            <a href='#contact' onClick={toggleHamburger}>Contact</a>
          </nav>
        </>
      ) : (
        <nav className='nav-links'>
          <a href='#overview'>Overview</a>
          <a href='#features'>Features</a>
          <a href='#photos'>Photos</a>
          <a href='#contact'>Contact</a>
        </nav>
      )}
    </div>
  );
};

export default Header;
