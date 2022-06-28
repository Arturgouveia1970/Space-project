import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './NavBar.css';

const NavBar = () => {
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
      <ul className="nav-bar-links">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className="nav-link">
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
