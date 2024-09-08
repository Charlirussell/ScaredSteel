import SandblastingImg from "/src/assets/images/sandblasting.jpg";
import './Sandblasting.scss';

const Sandblasting = () => {
  return (
    <>
      <div className='sandblasting-main'>
        <img src={SandblastingImg} alt="sandblasting-img" className='sandblasting-image' />
        <div className='sandblasting-text'>
          <h1>Scarred Steel</h1>
          <h2>Sandblasting Guernsey</h2>
        </div>
        <div className='button-container'>
          <button><a href="tel:07911711828">Call Us</a></button>
          <button><a href="mailto:scarredsteelmetalmaintenance@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='sandblasting-section'>
        
      </div>
    </>
  );
};

export default Sandblasting;