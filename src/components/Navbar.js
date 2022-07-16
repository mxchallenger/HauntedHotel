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
const Navbar = () => (
  <div className={s.navContainer}>
    <div className={s.left}>
      <NavLink to="/">
        <img src={logo} alt="Logo" height="150px" />
      </NavLink>
    </div>
    <div className={s.right}>
      <nav className={s.links}>
        <NavLink activeClassName={s.active} to={c.RESERVATION_ENDPOINT}>Reservations</NavLink>
        <NavLink activeClassName={s.active} to={c.ROOMTYPE_ENDPOINT}>Room Types</NavLink>
      </nav>
    </div>
  </div>
);

export default Navbar;
