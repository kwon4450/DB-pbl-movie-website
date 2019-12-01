import React, { Component } from 'react';
import Slideshow from '../practice/Slide';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Slideshow></Slideshow>
      </div>
    );
  }
}

export default Home;
