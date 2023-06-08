import React from 'react';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section';
import ImageGallery from './components/gallery/image-gallery';
import shopImgOne from '../static/assets/images/cast-the-chains-watermark.jpg'
import shopImgTwo from '../../src/static/assets/images/bold-lions-watermark.jpg'
import shopImgThree from '../../src/static/assets/images/lily-pass-through-the-waters.jpg'
import shopImgFour from '../../src/static/assets/images/MarilynMonroeArt.jpg'
import shopImgFive from '../../src/static/assets/images/Ocean_In_Wine_Glass_Artwork.jpg'
import shopImgSix from '../../src/static/assets/images/love-never-fails-watermark.jpg'

const Services = () => {

    const images = [
      shopImgOne,
      shopImgTwo,
      shopImgThree,
      shopImgFour,
      shopImgFive,
      shopImgSix
    ];
    return (
      <div className='services-page-wrapper'>
        <div className='nav-bar-header-wrapper'>
          <div className='logo-wrapper'>
            <NavBarLogo />
          </div>
          <div className='nav-bar-wrapper'>
            <NavBar />
          </div>
        </div>

        <div className='services-header'>
          - Services - 
        </div>

        <div className='services-list-wrapper'>
          <ImageGallery images={images} />
        </div>

        <div className='contact-section-wrapper'>
          <ContactSection />
        </div>
      </div> 
    );
  }

  export default(Services);