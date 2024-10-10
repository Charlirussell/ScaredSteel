import React from 'react';
import MetalworksImg from "/src/assets/images/grinder-1.jpg";
import './Metalwork.scss';

const Metalwork = () => {

  return (
    <>
      <div className='metalwork-main'>
        <img src={MetalworksImg} alt="metalwork-img" className='metalwork-image' />
        <div className='metalwork-text'>
          <h1>Scarred Steel</h1>
          <h2>Metal Works Guernsey</h2>
        </div>
        <div className='button-container'>
          <button><a href="tel:07911711828">Call Us</a></button>
          <button><a href="mailto:scarredsteelmetalmaintenance@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='metalwork-section'>
        <div className='metalwork-paragraph'>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus delectus, quidem consectetur nihil ullam asperiores aperiam. Asperiores exercitationem nemo odio, labore fuga aut eligendi ea dolor libero aspernatur ex!</p>
          </div>
          <div className='gallery-container'>
          
            </div>
      </div>
    </>
  );
};

export default Metalwork;