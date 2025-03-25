import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import FabricationImg from "/src/assets/images/welding-close.jpg";
import FabricationGalleryTn from "/src/assets/images/fabri-gallery-tn.webp";

import './Fabrication.scss';

const Fabrication = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const [images, setImages] = useState ([]);

      useEffect(() => {
        const importImages = async () => {
          const imagePaths = [
            import('../../assets/images/fabrication-1.jpg'),
            import('../../assets/images/fabrication-2.jpg'),
            import('../../assets/images/fabrication-3.jpg'),
            import('../../assets/images/fabrication-6.jpg'),
            import('../../assets/images/fabrication-4.jpg'),
            import('../../assets/images/fabrication.jpg'),
          ];
          const loadedImages = await Promise.all(imagePaths);
    
          setImages(loadedImages.map(image => ({ src: image.default })));
        };
        importImages();
      }, []);

      const toggleText = () => {
        setIsReadMoreOpen(!isReadMoreOpen);
      };
    
  return (
    <>
      <div className='fabrication-main'>
        <img src={FabricationImg} alt="fabrication-img" className='fabrication-image' />
        <div className='fabrication-text'>
          <h1>Scarred Steel</h1>
          <h2>Fabrication Guernsey</h2>
        </div>
        <div className='button-container'>
          <button className="custom-button"><a href="tel:07781162102">Call Us</a></button>
          <button className="custom-button"><a href="mailto:scarredsteelmetalmaintenance@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='fabrication-section'>
        <div className='fabrication-paragraph'>
            <h1>Our Services</h1>
            <p>
              At Scarred Steel, we offer top-tier metal fabrication services in Guernsey, designed to meet your unique needs.
              {isReadMoreOpen && (
                <>
                {' '}  
                Whether you're looking for custom-built gates, bespoke metalwork, or repairs, our skilled team uses precision techniques and high-quality materials to bring your vision to life. We specialize in delivering durable, visually striking results for both residential and commercial projects. From the initial concept to the finished product, we work closely with you to ensure every detail is perfect. Get in touch today to learn how Scarred Steel can turn your ideas into reality with our expert metal fabrication services.
                </>
              )}
            </p>
            <button onClick={toggleText} className='read-more-btn'>
              {isReadMoreOpen ? 'Read Less' : 'Read More'}
            </button>
        </div>
        <div className='fabrication-gallery'>
          {/* Lightbox Thumbnail */}
          <div className='lightbox-container'>
            <button className='thumbnail-btn' type='button' onClick={() => setIsLightboxOpen(true)}>
              <img src={ FabricationGalleryTn } alt="Thumbnail1" class="thumbnail" />
            </button>
          </div>
          {/* Lightbox */}
          <Lightbox
            open={isLightboxOpen}
            close={() => setIsLightboxOpen(false)}
            slides={images}
          />
        </div>
      </div>
    </>
  );
};

export default Fabrication;