import React from 'react';
import RestorationImg from "/src/assets/images/gate.jpeg";
import RestoGalleryTn from "/src/assets/images/resto-gallery-tn.webp";
import './Restoration.scss';

const Restoration = () => {
  
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
        <div className='restoration-paragraph'>
            <h1>Restoration Services</h1>
            <p>At Scarred Steel, we specialize in the restoration and repair of various metalwork projects in Guernsey, including fire escapes, gates, and more. From intricate wrought iron details to essential repairs, we focus on delivering exceptional craftsmanship and top-tier service. Our experienced team uses advanced restoration techniques and high-quality materials to bring aged or damaged metalwork back to life. Whether you need restoration for outdoor structures, industrial machinery, or custom gates, we're here to help. Contact us today to learn how Scarred Steel can transform your metalwork with our expert restoration services.</p>
        </div>
          <div className='restoration-gallery'>
            <img src={ RestoGalleryTn } alt="" />
          </div> 
      </div>
    </>
  );
};

export default Restoration;