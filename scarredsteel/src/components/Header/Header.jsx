import textLogo from '../../assets/logos/text-logo.png';

import './Header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='home-logo'>
        <img src={textLogo} alt="logo-1" />
      </div>
      <a href="tel:07911711828" className='phone-number'>07911 711828</a>
    </div>
  );
};

export default Header;