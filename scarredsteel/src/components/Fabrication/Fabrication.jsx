import React from 'react';
import FabricationImg from "/src/assets/images/welding-close.jpg";
import Fabri from '../../assets/images/fabrication.jpg';
import Fabri1 from '../../assets/images/fabrication-1.jpg';
import Fabri2 from '../../assets/images/fabrication-2.jpg';
import Fabri3 from '../../assets/images/fabrication-3.jpg';
import Fabri4 from '../../assets/images/fabrication-4.jpg';

import './Fabrication.scss';

const Fabrication = () => {
  const images = [
    { src: Fabri, className: 'fabri-gallery-img' },
    { src: Fabri1, className: 'fabri-gallery-img-1' },
    { src: Fabri2, className: 'fabri-gallery-img-2' },
    { src: Fabri3, className: 'fabri-gallery-img-3' },
    { src: Fabri4, className: 'fabri-gallery-img-4' },
  ];
  return (
    <>
      <div className='fabrication-main'>
        <img src={FabricationImg} alt="fabrication-img" className='fabrication-image' />
        <div className='fabrication-text'>
          <h1>Scarred Steel</h1>
          <h2>Fabrication Guernsey</h2>
        </div>
        <div className='button-container'>
          <button><a href="tel:07911711828">Call Us</a></button>
          <button><a href="mailto:scarredsteelmetalmaintenance@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='fabrication-section'>
        <div className='fabrication-gallery'>
          {images.map((image, index) => (
              <img key={index} src={image.src} alt={`gallery-img-${index + 1}`} className={image.className} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Fabrication;