import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import HomeImg from '/src/assets/images/welding-far.jpeg';
import HomeGalleryTn from '/src/assets/images/h-gallery-tn.webp';

import './Home.scss';


const Home = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [images, setImages] = useState ([]);

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

  const toggleText = () => {
    setIsReadMoreOpen(!isReadMoreOpen);
  };

  return (
    <>
      <div className='home-main'>
        <img src={HomeImg} alt="home-img" className='home-image' />
        <div className='home-text'>
          <h1>Scarred Steel</h1>
          <h2>Metal Works Guernsey</h2>
        </div>
        <div className='button-container'>
          <button className="custom-button"><a href="tel:07781162102">Call Us</a></button>
          <button className="custom-button"><a href="mailto:scarredsteelguernsey@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='home-section'>
        <div className='home-paragraph'>
          <h1>Our Services</h1>
          <p>
            At Scarred Steel, we specialize in high-quality metal restoration and fabrication services in Guernsey. Whether you need fire escapes, gates, or other metalwork projects restored or custom-built, our expert team has the skills and experience to deliver exceptional results.
            {isReadMoreOpen && (
              <>
              {' '}
              From welding and fabrication to comprehensive restoration, we pride ourselves on outstanding craftsmanship and customer service. No project is too big or small, and we ensure every detail is perfect. If you're looking for reliable metal restoration and fabrication services in Guernsey, contact us today to discuss how we can bring your metalwork back to life.
              </>
            )}
          </p>
          <button onClick={toggleText} className='read-more-btn'>
            {isReadMoreOpen ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <div className='home-gallery'>
          {/* Lightbox Thumbnail */}
          <div className='lightbox-container'>
            <button className='thumbnail-btn' type='button' onClick={() => setIsLightboxOpen(true)}>
              <img src={ HomeGalleryTn } alt="Thumbnail1" className="thumbnail" />
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

export default Home;