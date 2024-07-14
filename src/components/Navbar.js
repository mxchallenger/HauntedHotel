import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../styles/navbar.module.css';
import logo from '../utils/logo.png';
import c from '../utils/constants';

/**
 * @name Navbar
 * @description Displays navbar header
 * @returns component
 */
function Navbar() {
  return (
    <div className={s.navContainer}>
      <div className={s.left}>
        <NavLink to="/">
          <img src={logo} alt="Logo" height="150px" />
        </NavLink>
      </div>
      <div className={s.right}>
        <nav className={s.links}>
          <NavLink
            to={c.RESERVATION_ENDPOINT}
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Reservations
          </NavLink>
          <NavLink
            to={c.ROOMTYPE_ENDPOINT}
            className={({ isActive }) => (isActive ? s.active : undefined)}
          >
            Room Types
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
