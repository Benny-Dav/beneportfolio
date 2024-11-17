import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ images,links, descriptions}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="mt-[2em] relative w-[70%] h-[400px] ml-[15%] border" >
      {/* Prev button */}
      <button
      id="arrow-left"
        onClick={prevSlide}
        
        style={{
            width:"5%",
            height:"20%",
            fontSize:"2em",
          position: 'absolute',
          top: '50%',
          left: '-2em',
          transform: 'translateY(-50%)',
          zIndex: 1,
          background: '#DC143C',
          color: "white",
          border: 'none',
          
          padding: '10px',
          cursor: 'pointer',
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Next button */}
      <button
      id="arrow-right"
        onClick={nextSlide}
        
        style={{
            width:"5%",
            height:"20%",
            fontSize:"2em",
          position: 'absolute',
          top: '50%',
          right: '-2em',
          transform: 'translateY(-50%)',
          zIndex: 1,
          background: '#DC143C',
          color: 'white',
          border: 'none',
          
          padding: '10px',
          cursor: 'pointer',
        }}
      >
       <FontAwesomeIcon  icon={faArrowRight}/>
      </button>

      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
          style={{
            display: index === currentIndex ? 'block' : 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 0.5s ease',
            
          }}
        >
          <a href={image.path} target = "_blank">
          <img
            src={image.image}
            alt={`Slide ${index}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          </a>
          <div className=' h-[3em] border'>
            
              <p className="text-center text-[1.5em] font-bold">{image.description}</p>
         
          </div>
        </div>
      ))}
      
    </div>

  );
};

export default Slider;
