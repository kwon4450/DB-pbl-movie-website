import React, { Component } from 'react';

import Movie from './Movie';

class MovieBox extends Component{
  render() {
    return(
      <div className='MovieBox'>
        <Movie></Movie>
      </div>
    );
  }
}

export default MovieBox;