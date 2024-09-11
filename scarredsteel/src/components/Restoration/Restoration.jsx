import React from 'react';
import RestorationImg from "/src/assets/images/gate.jpeg";
import Wheels from '../../assets/images/wheels.jpg';
import Wheels1 from '../../assets/images/wheels-1.jpg';
import Wheels2 from '../../assets/images/wheels-2.jpg';
import Wheels3 from '../../assets/images/wheels-3.jpg';
import Wheels4 from '../../assets/images/wheels-4.jpg';
import Wheels5 from '../../assets/images/wheels-5.jpg';
import Wheels6 from '../../assets/images/wheels-6.jpg';
import './Restoration.scss';

const Restoration = () => {
  const images = [
    { src: Wheels, className: 'resto-gallery-img' },
    { src: Wheels1, className: 'resto-gallery-img-1' },
    { src: Wheels2, className: 'resto-gallery-img-2' },
    { src: Wheels3, className: 'resto-gallery-img-3' },
    { src: Wheels4, className: 'resto-gallery-img-4' },
    { src: Wheels5, className: 'resto-gallery-img-5' },
    { src: Wheels6, className: 'resto-gallery-img-6' },
  ];
  
  return (
    <>
      <div className='restoration-main'>
        <img src={RestorationImg} alt="restoration-img" className='restoration-image' />
        <div className='restoration-text'>
          <h1>Scarred Steel</h1>
          <h2>Restoration Guernsey</h2>
        </div>
        <div className='button-container'>
          <button><a href="tel:07911711828">Call Us</a></button>
          <button><a href="mailto:scarredsteelmetalmaintenance@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='restoration-section'>
        <div className='restoration-container'>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`gallery-img-${index + 1}`} className={image.className} />
          ))}
        </div> 
      </div>
    </>
  );
};

export default Restoration;