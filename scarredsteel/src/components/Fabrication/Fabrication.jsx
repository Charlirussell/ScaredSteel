import React from 'react';
import FabricationImg from "/src/assets/images/welding-close.jpg";
import FabricationGalleryTn from "/src/assets/images/fabri-gallery-tn.webp";
import './Fabrication.scss';

const Fabrication = () => {

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
      <div className='fabrication-paragraph'>
          <h1>Our Services</h1>
          <p>At Scarred Steel, we offer top-tier metal fabrication services in Guernsey, designed to meet your unique needs. Whether you're looking for custom-built gates, bespoke metalwork, or repairs, our skilled team uses precision techniques and high-quality materials to bring your vision to life. We specialize in delivering durable, visually striking results for both residential and commercial projects. From the initial concept to the finished product, we work closely with you to ensure every detail is perfect. Get in touch today to learn how Scarred Steel can turn your ideas into reality with our expert metal fabrication services.</p>
        </div>
        <div className='fabrication-gallery'>
          <img src={ FabricationGalleryTn } alt="" />
        </div>
      </div>
    </>
  );
};

export default Fabrication;