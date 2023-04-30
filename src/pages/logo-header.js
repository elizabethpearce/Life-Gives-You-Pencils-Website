import React, { Component } from 'react';
import headerLogo from '../static/assets/images/Life_Gives_You_Pencils_Logo.png'

export default class LogoHeader extends Component {
  render() {
    return (
      <div className='logo-header'>
        <img src={headerLogo}  alt="Life Gives You Pencils Logo Header" ></img>
      </div>

      
    );
  }
}