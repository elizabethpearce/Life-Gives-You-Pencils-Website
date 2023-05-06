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

import React from 'react';
import NavBarLogo from './components/home/nav-bar-logo';
import NavBar from './components/home/nav-bar';

const About = () => {
  return (
    <div className='about-page-wrapper'>
      <div className='nav-bar-header-wrapper'>
        <div className='logo-wrapper'>
          <a href='localhost:3000' className="logo-home-page-link"><NavBarLogo /></a>
        </div>
        <div className='nav-bar-wrapper'>
          <NavBar />
        </div>
      </div>
      This is the About Page
    </div>
  );
};

export default About;
