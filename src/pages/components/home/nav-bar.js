// import React, { Component } from 'react';
// import React from 'react';


// export default class NavBar extends Component {
//   render() {
//     return (
//         <div className='nav-bar-button-wrapper'>
//           <button className='btn'>Home</button>
//           <button className='btn'>Shop</button>
//           <button className='btn'>Services</button>
//           <button className='btn'>Gallery</button>
//           <button className='btn'>Events & News</button>
//           <button className='btn'>About</button>
//           <button className='btn'>Contact</button>
//           <button className='btn-special-nav-bar'>Cart</button>
//         </div>
//     );
//   }
// }



// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <div className="nav-bar-button-wrapper">
//       <Link to="/" className="btn-special-nav-bar">Home</Link>
//       <Link to="/shop" className="btn">Shop</Link>
//       <Link to="/services" className="btn">Services</Link>
//       <Link to="/gallery" className="btn">Gallery</Link>
//       <Link to="/events-news" className="btn">Events & News</Link>
//       <Link to="/about" className="btn">About</Link>
//       <Link to="/contact" className="btn">Contact</Link>
//       <Link to="/cart" className="btn-special-nav-bar">Cart</Link>
//     </div>
//   );
// };

// export default NavBar;


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
      <NavLink to="/cart"className="btn-special-nav-bar">Cart</NavLink>
    </div>
  );
};

export default NavBar;
