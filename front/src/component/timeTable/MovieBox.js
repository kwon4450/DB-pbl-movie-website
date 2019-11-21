import React, { Component } from 'react';

import Movie from './Movie';
import "style/MovieBox.css"

class MovieBox extends Component{
  render() {
    return(
      <div className={'MovieBox'+(this.props.isActive?'':' deactive')}>
        {this.props.timeTableData.map((item, index) => <Movie {...item} key={index}></Movie>)}
      </div>
    );
  }
}

export default MovieBox;