import React from 'react';
import HomeImg from '/src/assets/images/welding-far.jpeg';
import HomeGalleryTn from '/src/assets/images/h-gallery-tn.webp';
import './Home.scss';


const Home = () => {

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
        <div className='home-paragraph'>
          <h1>Our Services</h1>
          <p>At Scarred Steel, we specialize in high-quality metal restoration and fabrication services in Guernsey. Whether you need fire escapes, gates, or other metalwork projects restored or custom-built, our expert team has the skills and experience to deliver exceptional results. From welding and fabrication to comprehensive restoration, we pride ourselves on outstanding craftsmanship and customer service. No project is too big or small, and we ensure every detail is perfect. If you're looking for reliable metal restoration and fabrication services in Guernsey, contact us today to discuss how we can bring your metalwork back to life.</p>
        </div>
        <div className='home-gallery'>
          <img src={ HomeGalleryTn } alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;