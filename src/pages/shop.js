import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';
import shopImgOne from '../static/assets/images/PinkButterflyArt.jpg'
import shopImgTwo from '../../src/static/assets/images/Cast_The_Chains_Artwork.png'
import shopImgThree from '../../src/static/assets/images/Ocean_In_Wine_Glass_Artwork.jpg'
import shopImgFour from '../../src/static/assets/images/MarilynMonroeArt.jpg'

const Shop = () => {
 
    return (
      <div className='shop-page-wrapper'>
        <div className='nav-bar-header-wrapper'>
          <div className='logo-wrapper'>
            <NavBarLogo />
          </div>
          <div className='nav-bar-wrapper'>
            <NavBar />
          </div>
        </div>

        <div className='shop-header'>
          - For Sale -
        </div>

        
        <div className='gallery-art'>
          <div className='gallery-section-one'>
            <div className='gallery-one-art'>
                <img className='gallery-image-one' src={shopImgOne} alt='All Artwork'></img>
              <div className='gallery-button-wrapper'>
                <NavLink to='/art-series-one' className='btn'>Butterflies</NavLink>
              </div>
            </div>
            <div className='gallery-two-art'>
                <img className='gallery-image-two' src={shopImgTwo} alt='All Artwork'></img>
              <div className='gallery-button-wrapper'>
                <NavLink to='/art-series-two' className='btn'>Art Series Two</NavLink>
              </div>
            </div>
          </div>

          <div className='gallery-section-two'>
            <div className='gallery-three-art'>
                <img className='gallery-image-three' src={shopImgThree} alt='All Artwork'></img>
              <div className='gallery-button-wrapper'>
                <NavLink to='/custom-jobs' className='btn'>Custom Jobs</NavLink>
              </div>
            </div>
            <div className='gallery-four-art'>
                <img className='gallery-image-four' src={shopImgFour} alt='All Artwork'></img>
              <div className='gallery-button-wrapper'>
                <NavLink to='/misc-art' className='btn'>Misc</NavLink>
              </div>
            </div>
          </div>
        </div>
        
        <div className='contact-section-wrapper'>
          <ContactSection />
        </div>
      </div>
    );
  }

  export default(Shop);