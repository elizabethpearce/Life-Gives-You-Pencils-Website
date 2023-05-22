import React from 'react';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';

const EventsAndNews = () => {
 
    return (
      <div className='events-and-news-wrapper'>
      <div className='nav-bar-header-wrapper'>
        <div className='logo-wrapper'>
          <NavBarLogo />
        </div>
        <div className='nav-bar-wrapper'>
          <NavBar />
        </div>
      </div>
        <div className='events-and-news-header-wrapper'>
          - Events & News -
        </div>
        <div className='events-and-news-text-wrapper'>
        <div className='events-wrapper'>
          Current Events Listing<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet <br/>
          facilisis ligula. Sed pellentesque eu tellus sed aliquet. Nullam justo augue, <br/>
          iaculis at luctus at, efficitur sit amet sapien. Vestibulum diam ante, pretium <br/>
          sit amet metus sed, vulputate porta turpis. In auctor metus at tellus posuere, <br/>
          eu consequat mauris auctor. Ut nec libero nisl. Morbi elit nunc, <br/>
          bibendum ac augue ac, egestas ultrices quam. Suspendisse potenti. <br/>
          In in felis mi. Curabitur molestie, erat sagittis dapibus dapibus, <br/>
          mi ante porta ante, eget tempor tortor quam aliquet dolor. <br/>
          Nam arcu libero, feugiat non ex a, ullamcorper aliquet ligula.
        </div>
        <div className='news-wrapper'>
          News Listings<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet <br/>
          facilisis ligula. Sed pellentesque eu tellus sed aliquet. Nullam justo augue, <br/>
          iaculis at luctus at, efficitur sit amet sapien. Vestibulum diam ante, pretium <br/>
          sit amet metus sed, vulputate porta turpis. In auctor metus at tellus posuere, <br/>
          eu consequat mauris auctor. Ut nec libero nisl. Morbi elit nunc, <br/>
          bibendum ac augue ac, egestas ultrices quam. Suspendisse potenti. <br/>
          In in felis mi. Curabitur molestie, erat sagittis dapibus dapibus, <br/>
          mi ante porta ante, eget tempor tortor quam aliquet dolor. <br/>
          Nam arcu libero, feugiat non ex a, ullamcorper aliquet ligula.
        </div>
      </div>
      <div className='contact-section-wrapper'>
        <ContactSection />
      </div>
      </div>
    );
  }

  export default(EventsAndNews);