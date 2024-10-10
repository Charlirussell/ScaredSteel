import RoofingImg from '/src/assets/images/roofing.jpg';
import React from 'react';

import './Roofing.scss';

const Roofing = () => {
  const images = [

  ];
    return (
    <>
      <div className='roofing-main'>
        <img src={RoofingImg} alt="roofing-img" className='roofing-image' />
        <div className='roofing-text'>
          <h1>Scarred Steel</h1>
          <h2>Roofing Guernsey</h2>
        </div>
        <div className='button-container'>
          <button><a href="tel:07911711828">Call Us</a></button>
          <button><a href="mailto:scarredsteelmetalmaintenance@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='roofing-section'>
        <div className='roofing-paragraph'>
          <h1>Our Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore omnis ducimus explicabo eaque mollitia porro fugiat animi nulla harum amet, ratione modi eos voluptate, tenetur aperiam laborum voluptatem consectetur!</p>
        </div>
        <div className='roofing-gallery'>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`gallery-img-${index + 1}`} className={image.className} />
          ))}
        </div>
      </div>
    </>
    );
};

export default Roofing;