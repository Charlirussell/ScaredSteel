import React from 'react';
import HomeImg from '/src/assets/images/welding-far.jpeg';
import Stairs1 from '../../assets/images/stairs-1.jpg';
import Stairs2 from '../../assets/images/stairs-2.jpg';
import Stairs3 from '../../assets/images/stairs-3.jpg';
import Stairs4 from '../../assets/images/stairs-4.jpg';
import Stairs5 from '../../assets/images/stairs-5.jpg';
import Stairs6 from '../../assets/images/stairs-7.jpg';
import Stairs7 from '../../assets/images/stairs-6.jpg';
import './Home.scss';


const Home = () => {
  const images = [
    { src: Stairs1, className: 'home-gallery-img-1' },
    { src: Stairs2, className: 'home-gallery-img-2' },
    { src: Stairs3, className: 'home-gallery-img-3' },
    { src: Stairs4, className: 'home-gallery-img-4' },
    { src: Stairs5, className: 'home-gallery-img-5' },
    { src: Stairs6, className: 'home-gallery-img-6' },
    { src: Stairs7, className: 'home-gallery-img-7' },
  ];
  
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
        <div className='home-gallery'>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`gallery-img-${index + 1}`} className={image.className} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;