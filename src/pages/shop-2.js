import React from 'react';
import NavBar from './components/home/nav-bar';
import NavBarLogo from './components/home/nav-bar-logo';
import ContactSection from './components/home/contact-section'; 
import RotatingFrame from './shop-rotating-imgs';
import shopImgOne from '../static/assets/images/cast-the-chains-watermark.jpg'
import shopImgTwo from '../../src/static/assets/images/bold-lions-watermark.jpg'
import shopImgThree from '../../src/static/assets/images/lily-pass-through-the-waters.jpg'
import shopImgFour from '../../src/static/assets/images/MarilynMonroeArt.jpg'
import shopImgFive from '../../src/static/assets/images/MarilynMonroeArt.jpg'
import shopImgSix from '../../src/static/assets/images/love-never-fails-watermark.jpg'

const ShopTwo = () => {
  const images = [
    shopImgOne,
    shopImgTwo,
    shopImgThree,
    shopImgFour,
    shopImgFive,
    shopImgSix
  ];

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
        <div className='shop-header-text'>
          Click the button below to visit my Etsy shop to purchase the artwork displayed here!
        </div> 

        <div className='header-shop-link'>
          <a href="https://www.etsy.com/shop/LifeGivesYouPencils?ref=simple-shop-header-name&listing_id=1381970399&fbclid=IwAR2KCd9LjWqQy2qXBVXTdVV1JZbmUE-8AmEKxyXZoi8IAcDFk1lcUvir-7I" target="_blank" rel="noopener noreferrer" class='shop-link'>
            <button className='btn'>Online Shop</button>
          </a>
        </div>
      </div> 
      
      <div className='for-sale-rotating-images'>
        <RotatingFrame images={images} interval={3200} width='700px'/>
      </div>

      <div className='contact-section-wrapper'>
          <ContactSection />
        </div>
    </div>
  );
};

export default ShopTwo;