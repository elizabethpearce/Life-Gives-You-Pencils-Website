import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';
import galleryImgOne from '../../src/static/assets/images/PinkButterflyArt.jpg'
import galleryImgTwo from '../../src/static/assets/images/Cast_The_Chains_Artwork.png'
import galleryImgThree from '../../src/static/assets/images/Ocean_In_Wine_Glass_Artwork.jpg'
import galleryImgFour from '../../src/static/assets/images/MarilynMonroeArt.jpg'

const Gallery = () => {
 
    return (
      <div className='gallery-page-wrapper'>
        <div className='nav-bar-header-wrapper'>
          <div className='logo-wrapper'>
            <NavBarLogo />
          </div>
          <div className='nav-bar-wrapper'>
            <NavBar />
          </div>
        </div>

        <div className='gallery-header'>
          - Gallery -
        </div>

        
        <div className='gallery-art'>
          <div className='gallery-section-one'>
            <div className='gallery-one-art'>
                <img className='gallery-image-one' src={galleryImgOne} alt='All Artwork'></img>
              <div className='gallery-button-wrapper'>
                <NavLink to='/art-series-one' className='btn'>Art Series One</NavLink>
              </div>
            </div>
            <div className='gallery-two-art'>
                <img className='gallery-image-two' src={galleryImgTwo} alt='All Artwork'></img>
              <div className='gallery-button-wrapper'>
                <NavLink to='/art-series-two' className='btn'>Art Series Two</NavLink>
              </div>
            </div>
          </div>

          <div className='gallery-section-two'>
            <div className='gallery-three-art'>
                <img className='gallery-image-three' src={galleryImgThree} alt='All Artwork'></img>
              <div className='gallery-button-wrapper'>
                <NavLink to='/custom-jobs' className='btn'>Custom Jobs</NavLink>
              </div>
            </div>
            <div className='gallery-four-art'>
                <img className='gallery-image-four' src={galleryImgFour} alt='All Artwork'></img>
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

  export default(Gallery);