import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/" onClick={handleLinkClick}>Home</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/paint" onClick={handleLinkClick}>Paint</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/metalworks" onClick={handleLinkClick}>Metal Work</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/fabrication" onClick={handleLinkClick}>Fabrication</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/restoration" onClick={handleLinkClick}>Restoration</NavLink>
      <NavLink className={({ isActive }) =>isActive ? 'menu menu--active' : 'menu'} to="/roofing" onClick={handleLinkClick}>Roofing</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;