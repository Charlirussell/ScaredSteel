import React, { useState, useEffect } from 'react';
import RestorationImg from "/src/assets/images/gate.jpeg";
import './Restoration.scss';

const Restoration = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imagePaths = [
        import('../../assets/images/wheels.jpg'),
        import('../../assets/images/wheels-1.jpg'),
        import('../../assets/images/wheels-2.jpg'),
        import('../../assets/images/wheels-3.jpg'),
        import('../../assets/images/wheels-4.jpg'),
        import('../../assets/images/wheels-5.jpg'),
        import('../../assets/images/wheels-6.jpg'),
      ];

      const loadedImages = await Promise.all(imagePaths);
      setImages(loadedImages.map(image => ({ src: image.default })));
    };

    importImages();
  }, []);
  
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
             <img
              src={images[3]?.src}
              alt='Left Image 3'
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
              src={images[4]?.src}
              alt='Right Image 1'
              className='side-image'
            />
            <img
              src={images[5]?.src}
              alt='Right Image 2'
              className='side-image'
            />
            <img
              src={images[6]?.src}
              alt='Right Image 3'
              className='side-image'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Restoration;