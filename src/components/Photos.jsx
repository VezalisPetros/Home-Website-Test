import React, { useState, useEffect } from 'react';

const Photos = () => {
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);

  useEffect(() => {
    const carouselElement = document.querySelector('.carousel');

    const handleScroll = () => {
      // Check if the component has already been mounted before updating the state
      if (carouselElement && carouselElement.scrollWidth > carouselElement.clientWidth) {
        setShowLeftIcon(carouselElement.scrollLeft > 0);
        setShowRightIcon(carouselElement.scrollLeft < carouselElement.scrollWidth - carouselElement.clientWidth);
      }
    };

    // Set up event listener
    carouselElement.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      carouselElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollPhotos = (direction) => {
    const carouselElement = document.querySelector('.carousel');
    const firstImgWidth = carouselElement.firstElementChild.clientWidth + 15;

    if (carouselElement) {
      const scrollAmount = direction === 'left' ? -firstImgWidth : firstImgWidth;
      carouselElement.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className='photos-section' id='photos'>
      <div className="wrapper">
        {showLeftIcon && (
          <span className="material-symbols-outlined" id='left' onClick={() => scrollPhotos('left')}>
            arrow_back_ios
          </span>
        )}
        <div className="carousel">
          <img src="/r.jpg" alt="img" />
          <img src="/interior-modern-apartment-decorated-comfortably-with-huge-windows.jpg" alt="img" />
          <img src="/neat-organised-workspace-with-guitar.jpg" alt="img" />
          <img src="/wp2449378.webp" alt="img" />
        </div>
        {showRightIcon && (
          <span className="material-symbols-outlined" id='right' onClick={() => scrollPhotos('right')}>
            arrow_forward_ios
          </span>
        )}
      </div>
    </div>
  );
};

export default Photos;
