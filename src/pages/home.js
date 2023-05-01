import React, { Component } from 'react';
import NavBar from './nav-bar';
import LogoHeader from './logo-header';
import WelcomeSection from './welcome-section';
import ArtSection from './art-section';
import ContactSection from './contact-section';
import NavBarLogo from './nav-bar-logo';

export default class Home extends Component {
  render() {
    return (
      <div className='home-page-wrapper'>
        <div className='nav-bar-header-wrapper'>
          <div className='logo-wrapper'>
          <a href='#' class="logo-home-page-link"><NavBarLogo /></a>

          </div>
          <div className='nav-bar-wrapper'>           
            <NavBar />          
          </div>
        </div>

        <div className='logo-header-wrapper'>
          <LogoHeader />
        </div>

        <div className='welcome-section-wrapper'>
          <WelcomeSection />
        </div>

        <div className='art-section-wrapper'>
          <ArtSection />
        </div>

        <div className='contact-section-wrapper'>
          <ContactSection />
        </div>
        
      </div>
    );
  }
}
