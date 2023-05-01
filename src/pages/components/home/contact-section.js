import React, { Component } from 'react';

export default class ContactSection extends Component {
  render() {
    return (
      <div className='btn-contact-wrapper'>
        <button className='btn-contact'>
          <div>Contact</div>
          <div>Email: info@lifegivesyoupencils.com</div>
          <div>Mailing:</div>
          <div>P.O. Box 536</div>
          <div>Peyton, CO 80831</div>
        </button> 
      </div>
    );
  }
}