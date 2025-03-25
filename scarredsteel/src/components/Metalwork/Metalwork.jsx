import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import MetalworksImg from "/src/assets/images/grinder-1.jpg";
import MetalGalleryTn from "/src/assets/images/metal-gallery-tn.webp";

import './Metalwork.scss';

const Metalwork = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [images, setImages] = useState ([]);

  useEffect(() => {
    const importImages = async () => {
      const imagePaths = [
        import('../../assets/images/metal-1.jpg'),
        import('../../assets/images/metal-2.jpg'),
        import('../../assets/images/metal-3.jpg'),
        import('../../assets/images/metal-4.jpg'),
        import('../../assets/images/metal-5.jpg'),
        import('../../assets/images/metal-6.jpg'),
        import('../../assets/images/metal-7.jpg'),
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
      <div className='metalwork-main'>
        <img src={MetalworksImg} alt="metalwork-img" className='metalwork-image' />
        <div className='metalwork-text'>
          <h1>Scarred Steel</h1>
          <h2>Metal Works Guernsey</h2>
        </div>
        <div className='button-container'>
          <button className="custom-button"><a href="tel:07781162102">Call Us</a></button>
          <button className="custom-button"><a href="mailto:scarredsteelguernsey@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='metalwork-section'>
        <div className='metalwork-paragraph'>
            <h1>Our Services</h1>
            <p>
              At Scarred Steel, we specialize in expert metalwork services in Guernsey, offering comprehensive restoration, repair, and fabrication for a wide range of metal projects.
              {isReadMoreOpen && (
                <>
                {' '}
               Whether it's restoring fire escapes, gates, or repairing intricate wrought iron details, we focus on delivering exceptional craftsmanship and outstanding customer service. Our skilled team is equipped to handle metalwork projects of all sizes, using advanced techniques and high-quality materials to ensure durability and visual appeal. From welding to detailed restoration, we bring new life to your metalwork, ensuring it’s both functional and aesthetically pleasing. Contact us today to discuss your metalwork needs and see how Scarred Steel can transform your project.
                </>
              )}
            </p>
            <button onClick={toggleText} className='read-more-btn'>
              {isReadMoreOpen ? 'Read Less' : 'Read More'}
            </button>
        </div>
          <div className='metalwork-gallery'>
            {/* Lightbox */}
            <div className='lightbox-container'>
              <button className='thumbnail-btn' type='button' onClick={() => setIsLightboxOpen(true)}>
                <img src={ MetalGalleryTn } alt="Thumbnail1" class="thumbnail" />
              </button>
            </div>
            {/*Lightbox */}
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

export default Metalwork;