import React from 'react';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';

const Shop = () => {

  return (
    <div className='about-page-wrapper'>
    <div className='nav-bar-header-wrapper'>
      <div className='logo-wrapper'>
        <NavBarLogo />
      </div>
      <div className='nav-bar-wrapper'>
        <NavBar />
      </div>
    </div>
    <div>
      Shop here!
    </div>
    <div className='contact-section-wrapper'>
      <ContactSection />
    </div>
    </div>
  );
}

export default(Shop);