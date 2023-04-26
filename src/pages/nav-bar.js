import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar-button-wrapper'>
        <button className='btn'>Home</button>
        <button className='btn'>Shop</button>
        <button className='btn'>Services</button>
        <button className='btn'>Gallery</button>
        <button className='btn'>Events & News</button>
        <button className='btn'>About</button>
        <button className='btn'>Contact</button>
        <button className='btn'>Cart</button>
      </div>
    );
  }
}