import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar-button-wrapper">
      <NavLink exact to="/" className="btn-special-nav-bar">Home</NavLink>
      <NavLink to="/shop" className="btn">Shop</NavLink>
      <NavLink to="/services" className="btn">Services</NavLink>
      <NavLink to="/gallery" className="btn">Gallery</NavLink>
      <NavLink to="/events-news" className="btn">Events & News</NavLink>
      <NavLink to="/about" className="btn">About</NavLink>
      <NavLink to="/contact" className="btn">Contact</NavLink>
      {/* <NavLink to="/cart"className="btn-special-nav-bar">Cart</NavLink> */}
    </div>
  );
};

export default NavBar;