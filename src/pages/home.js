import React from 'react';
import NavBar from './components/home/nav-bar';
import LogoHeader from './components/home/logo-header';
import WelcomeSection from './components/home/welcome-section';
import ArtSection from './components/home/art-section';
import ContactSection from './components/home/contact-section';
import NavBarLogo from './components/home/nav-bar-logo';

const Home = () => {
  return (
    <div className='home-page-wrapper'>
      <div className='nav-bar-header-wrapper'>
        <div className='logo-wrapper'>
          <NavBarLogo />
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
};

export default Home;
