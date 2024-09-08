import RestorationImg from "/src/assets/images/gate.jpeg";
import './Restoration.scss';

const Restoration = () => {
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
        
      </div>
    </>
  );
};

export default Restoration;