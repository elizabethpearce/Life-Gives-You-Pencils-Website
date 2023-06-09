import React, { useState, useEffect } from 'react';

const RotatingFrame = ({ images, interval, width = '100%' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {  
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className='rotating-images-wrapper'>
      <img src={images[currentImageIndex]} alt="Rotating For Sale Art" style={{ width: width }} className='rotating-images'/>
    </div>
  );
};

export default RotatingFrame;
