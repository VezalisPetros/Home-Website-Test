import React, { useState, useEffect } from 'react';

const Photos = () => {
  const [showLeftIcon, setShowLeftIcon] = useState(true);
  const [showRightIcon, setShowRightIcon] = useState(true);

  const scrollPhotos = (direction) => {
    const carouselElement = document.querySelector('.carousel');
    const firstImgWidth = carouselElement.firstElementChild.clientWidth + 15;

    if (carouselElement) {
      const scrollAmount = direction === 'left' ? -firstImgWidth : firstImgWidth;
      carouselElement.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
      setShowLeftIcon(carouselElement.scrollLeft > 0);
      setShowRightIcon(carouselElement.scrollLeft < carouselElement.scrollWidth - carouselElement.clientWidth);
    }

    const handleScroll = () => {
      setShowLeftIcon(carouselElement.scrollLeft > 0);
      setShowRightIcon(carouselElement.scrollLeft < carouselElement.scrollWidth - carouselElement.clientWidth);
    };

    carouselElement.addEventListener('scroll', handleScroll);

    return () => {
      carouselElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='photos-section' id='photos'>
        
      <div className="wrapper">
        {showLeftIcon && (
          <span class="material-symbols-outlined" id='left' onClick={() => scrollPhotos('left')}>
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
          <span class="material-symbols-outlined" id='right' onClick={() => scrollPhotos('right')}>
            arrow_forward_ios
          </span>
        )}
      </div>
    </div>
  );
};

export default Photos;
