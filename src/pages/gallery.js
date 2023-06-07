import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';
import galleryImgOne from '../static/assets/images/PinkButterflyArt.jpg'
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
          <div className='gallery-header-text'>
            These are pieces that are one of a kind, they are not for sale and will never be reproduced.<br />
            They are the honorable mentions that date from a decade ago, to current works.<br/>
            Most of these show work in progress, practices, commissions, or one of a kind pieces for family or friends and <br/>
            all I was able to capture was a single photo of them before they went on to grace the spaces of those they were given to. <br/>
            Although not always the best quality image, I hope you enjoy them!
          </div>
        </div>

        
        <div className='gallery-art'>
          <div className='gallery-section-one'>
            <div className='gallery-one-art'>
                <img className='gallery-image-one' src={galleryImgOne} alt='All Artwork'></img>
              <div className='gallery-button-wrapper'>
                <NavLink to='/art-series-one' className='btn'>Gifts</NavLink>
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
                <NavLink to='/custom-jobs' className='btn'>Comissions</NavLink>
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