import PaintImg from "/src/assets/images/paint.jpg";
import './Paint.scss';

const Paint = () => {
  
  return (
    <>
      <div className='paint-main'>
        <img src={PaintImg} alt="paint-img" className='paint-image' />
        <div className='paint-text'>
          <h1>Scarred Steel</h1>
          <h2>Paint Spraying Guernsey</h2>
        </div>
        <div className='button-container'>
          <button><a href="tel:07911711828">Call Us</a></button>
          <button><a href="mailto:scarredsteelmetalmaintenance@gmail.com">Email Us</a></button>
        </div>
      </div>
      <div className='paint-section'>
        <div className='gallery-container'>
            
          </div>
      </div>
    </>
  );
};

export default Paint;