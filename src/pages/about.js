// import React, { Component } from 'react';
// import NavBarLogo from './components/home/nav-bar-logo';
// import NavBar from './components/home/nav-bar';

// export default class About extends Component {
//   render() {
//     return (
//       <div className='about-page-wrapper'>
//         <div className='nav-bar-header-wrapper'>
//           <div className='logo-wrapper'>
//             <a href='localhost:3000' class="logo-home-page-link"><NavBarLogo /></a>
//           </div>
//           <div className='nav-bar-wrapper'>           
//             <NavBar />          
//           </div>
//         </div>
//         This is the About Page
//       </div>      
//     );
//   }
// }

import React, { useEffect } from 'react';
import NavBarLogo from './components/home/nav-bar-logo';
import NavBar from './components/home/nav-bar';
import ContactSection from './components/home/contact-section';




const About = () => {
  // useEffect(() => {
  //   const navBar = document.querySelector('.nav-bar-header-wrapper');

  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       navBar.classList.add('fixed-nav');
  //     } else {
  //       navBar.classList.remove('fixed-nav');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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

      <div className='about-section-wrapper'>
        <div className='about-section-profile-picture'>
       
        </div>
        <div className='about-section-profile-text'>
          Hi! I'm Rebekah and I'm super passionate about my arwork and here is why!<br/>
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

      <div className='about-section-art-display'>
        <div className='about-section-artwork-one'>

        </div>

        <div className='about-section-artwork-two'>
   
        </div>

        <div className='about-section-artwork-three'>
     
        </div>
      </div>

      <div className='contact-section-wrapper'>
        <ContactSection />
      </div>
    </div>
  );
};

export default About;
