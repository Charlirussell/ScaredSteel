import React, { useState, useEffect } from 'react';
import './Home.scss';
import HomeImg from '/src/assets/images/welding-far.jpeg';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imagePaths = [
        import('../../assets/images/stairs-1.jpg'),
        import('../../assets/images/stairs-2.jpg'),
        import('../../assets/images/stairs-3.jpg'),
        import('../../assets/images/stairs-4.jpg'),
        import('../../assets/images/stairs-5.jpg'),
        import('../../assets/images/stairs-6.jpg'),
        import('../../assets/images/stairs-7.jpg'),
      ];

      const loadedImages = await Promise.all(imagePaths);
      setImages(loadedImages.map(image => ({ src: image.default })));
    };

    importImages();
  }, []);

  return (
    <>
      <div className='home-main'>
        <img src={HomeImg} alt="home-img" className='home-image' />
        <div className='home-text'>
          <h1>Scarred Steel</h1>
          <h2>Metal Works Guernsey</h2>
        </div>
        <div className='button-container'>
          <button><a href="tel:07911711828">Call Us</a></button>
          <button><a href="mailto:scarredsteelmetalmaintenance@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='home-section'>
        <div className='gallery-container'>
          <div className='side-images left'>
            <img
              src={images[2]?.src}
              alt='Left Image 1'
              className='side-image'
            />
            <img
              src={images[5]?.src}
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
              src={images[1]?.src}
              alt='Right Image 1'
              className='side-image'
            />
            <img
              src={images[6]?.src}
              alt='Right Image 2'
              className='side-image'
            />
            <img
              src={images[4]?.src}
              alt='Right Image 3'
              className='side-image'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;