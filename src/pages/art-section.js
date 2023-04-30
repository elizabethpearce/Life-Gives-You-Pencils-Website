import React, { Component } from 'react';

export default class ArtSection extends Component {
  render() {
    return (
      <div className='art-section'>
        <div className='art-spot-one'>
          Image One
          <div><button className='btn'>For Sale</button></div>
        </div>

        <div className='art-spot-2'>
          Image Two
          <div><button className='btn'>All Artwork</button></div>
        </div>
      </div>
    );
  }
}