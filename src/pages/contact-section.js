import React, { Component } from 'react';

export default class ContactSection extends Component {
  render() {
    return (
      <div>
        <button className='btn-contact-wrapper'>
          <div>Contact</div>
          <div>Email: info@lifegivesyoupencils.com</div>
          <div>Mailing:</div>
          <div>P.O. Box 536</div>
        </button> 
      </div>
    );
  }
}