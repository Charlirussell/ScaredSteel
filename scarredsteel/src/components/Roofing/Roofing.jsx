import RoofingImg from '/src/assets/images/roofing.jpg';
import React from 'react';

import './Roofing.scss';

const Roofing = () => {
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
        
      </div>
    </>
    );
};

export default Roofing;