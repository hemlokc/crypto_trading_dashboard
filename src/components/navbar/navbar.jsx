import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { scrollToTop } from '../../utils';

export default function Navbar({ active }) {
  const NavItem = ({ to, label, handleClick }) =>
    (
        <NavLink to={to} onClick={handleClick} className="navbar-item">
          <span>{label}</span>
        </NavLink>
    );

  return (
    <div id="navbar-panel" className="navbar-panel">
      <NavItem to="/" label="Home" handleClick={() => scrollToTop()} />
      <NavItem to="/charts" label="Charts" handleClick={() => scrollToTop()} />
      <NavItem to="/strategies" label="Strategies" handleClick={() => scrollToTop()} />
    </div>
  );
}
