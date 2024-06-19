import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import textLogo from '../../assets/logos/text-logo.png';

import './Navbar.scss';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };
  
  const closeMenu = () => {
    if (window.innerWidth > 768) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', closeMenu);
    return () =>{
      window.removeEventListener('resize', closeMenu);
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      showMenu(false);
    }
  };
  

  return (
    <nav>
      <div className='hamburger' onClick={toggleMenu}>
        <div className={`burger-icon ${showMenu ? 'close' : 'open'}`}></div>
      </div>
      <div className={`navbar ${showMenu ? 'show-menu' : ''}`}>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/home" onClick={handleLinkClick}>Home</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/paint" onClick={handleLinkClick}>Paint</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/welding" onClick={handleLinkClick}>Welding</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/sandblasting" onClick={handleLinkClick}>Sandblasting</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/restoration" onClick={handleLinkClick}>Restoration</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;