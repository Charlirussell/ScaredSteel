import React from 'react';
import MetalworksImg from "/src/assets/images/grinder-1.jpg";
import MetalImage1 from '../../assets/images/metal-1.jpg';
import MetalImage2 from '../../assets/images/metal-2.jpg';
import MetalImage3 from '../../assets/images/metal-3.jpg';
import MetalImage4 from '../../assets/images/metal-4.jpg';
import MetalImage5 from '../../assets/images/metal-5.jpg';
import MetalImage6 from '../../assets/images/metal-6.jpg';

import './Metalwork.scss';

const Metalwork = () => {

    const images = [
      {src: MetalImage1, className: 'metal-img-1'},
      {src: MetalImage2, className: 'metal-img-2'},
      {src: MetalImage3, className: 'metal-img-3'},
      {src: MetalImage4, className: 'metal-img-4'},
      {src: MetalImage5, className: 'metal-img-5'},
      {src: MetalImage6, className: 'metal-img-6'},

    ];

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
            <p>At Scarred Steel, we specialize in expert metalwork services in Guernsey, offering comprehensive restoration, repair, and fabrication for a wide range of metal projects. Whether it's restoring fire escapes, gates, or repairing intricate wrought iron details, we focus on delivering exceptional craftsmanship and outstanding customer service. Our skilled team is equipped to handle metalwork projects of all sizes, using advanced techniques and high-quality materials to ensure durability and visual appeal. From welding to detailed restoration, we bring new life to your metalwork, ensuring it’s both functional and aesthetically pleasing. Contact us today to discuss your metalwork needs and see how Scarred Steel can transform your project.</p>
          </div>
          <div className='metalwork-gallery-container'>
          <div className='metalwork-gallery'>
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={`gallery-img-${index + 1}`} className={image.className} />
              ))}
            </div>
          </div>
      </div>
    </>
  );
};

export default Metalwork;