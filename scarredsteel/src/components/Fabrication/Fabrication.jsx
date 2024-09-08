import React, { useState, useEffect } from 'react';
import FabricationImg from "/src/assets/images/welding-close.jpg";
import './Fabrication.scss';

const Fabrication = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imagePaths = [
        import('../../assets/images/fabrication.jpg'),
        import('../../assets/images/fabrication-1.jpg'),
        import('../../assets/images/fabrication-2.jpg'),
        import('../../assets/images/fabrication-3.jpg'),
        import('../../assets/images/fabrication-4.jpg'),
      ];

      const loadedImages = await Promise.all(imagePaths);
      setImages(loadedImages.map(image => ({ src: image.default })));
    };

    importImages();
  }, []);
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
        <div className='gallery-container'>
          <div className='side-images left'>
            <img
              src={images[1]?.src}
              alt='Left Image 1'
              className='side-image'
            />
            <img
              src={images[2]?.src}
              alt='Left Image 2'
              className='side-image'
            />
          </div>
          <img
            src={images[0]?.src}
            alt='Large Image'
            className='large-image'
          />
          <div className='side-images right'>
            <img
              src={images[3]?.src}
              alt='Right Image 1'
              className='side-image'
            />
            <img
              src={images[4]?.src}
              alt='Right Image 2'
              className='side-image'
            />
          </div>
        </div> 
      </div>
    </>
  );
};

export default Fabrication;