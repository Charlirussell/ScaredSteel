import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import RestorationImg from "/src/assets/images/gate.jpeg";
import RestoGalleryTn from "/src/assets/images/resto-gallery-tn.webp";

import './Restoration.scss';

const Restoration = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [images, setImages] = useState ([]);
  
    useEffect(() => {
      const importImages = async () => {
        const imagePaths = [
          import('../../assets/images/wheels-1.jpg'),
          import('../../assets/images/wheels-2.jpg'),
          import('../../assets/images/wheels-3.jpg'),
          import('../../assets/images/wheels-4.jpg'),
          import('../../assets/images/wheels-5.jpg'),
          import('../../assets/images/wheels-6.jpg'),
          import('../../assets/images/wheels.jpg'),
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
        <div className='restoration-paragraph'>
            <h1>Restoration Services</h1>
            <p>At Scarred Steel, we specialize in the restoration and repair of various metalwork projects in Guernsey, including fire escapes, gates, and more. From intricate wrought iron details to essential repairs, we focus on delivering exceptional craftsmanship and top-tier service. Our experienced team uses advanced restoration techniques and high-quality materials to bring aged or damaged metalwork back to life. Whether you need restoration for outdoor structures, industrial machinery, or custom gates, we're here to help. Contact us today to learn how Scarred Steel can transform your metalwork with our expert restoration services.</p>
        </div>
        <div className='restoration-gallery'>
            {/* Lightbox Thumbnail */}
          <div classname='lightbox-container'>
            <button className='thumbnail-btn' type='button' onClick={() => setIsLightboxOpen(true)}>
              <img src={ RestoGalleryTn } alt="Thumbnail1" class="thumbnail" />
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

export default Restoration;