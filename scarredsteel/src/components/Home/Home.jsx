import HomeImg from "/src/assets/images/welding-far.jpeg";
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

      </div>
    </>
  );
};

export default Home;