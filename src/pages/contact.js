import React from 'react';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';

const Contact = () => {
 
    return (
      <div className='contact-page-wrapper'>
      <div className='nav-bar-header-wrapper'>
        <div className='logo-wrapper'>
          <NavBarLogo />
        </div>
        <div className='nav-bar-wrapper'>
          <NavBar />
        </div>
      </div>
      <div className='contact-info-wrapper'>
        Have questions or want to request custom artwork? Contact me in one of the ways below! <br/><br/><br/>
        Email: info@lifegivesyoupencils.component<br/><br/>
        Mailing: P.O. Box 536, Peyton, CO 80831
      </div>
      <div className='contact-section-wrapper'>
        <ContactSection />
      </div>
      </div>
    );
  }

  export default(Contact);