import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/planet.png';
import './NavBar.css';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  const links = [
    {
      path: 'rockets',
      text: 'Rockets',
    },
    {
      path: 'profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="Cosmos Logo." width={50} height={50} />
        <h1>Space Travellers&apos; Hub</h1>
      </div>
      {openMenu ? (<AiOutlineClose onClick={() => toggleMenu()} className="menu-icon" />) : (<AiOutlineMenu onClick={() => toggleMenu()} className="menu-icon" />)}
      <ul className="nav-bar-links">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className="nav-link">
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="mobile-navUl" style={{ transform: openMenu ? 'translateX(0)' : 'translateX(120%)' }}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className="nav-link mobile" onClick={() => toggleMenu()}>
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
