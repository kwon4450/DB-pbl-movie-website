import React, { Component } from 'react';

import MovieBox from './MovieBox';

class TimeTable extends Component{
  render() {
    return(
    <div className='TimeTable'>
      <div className='date'>
        <ul>
          <li>21일</li>
          <li>22일</li>
          <li>23일</li>
        </ul>
      </div>
      <MovieBox></MovieBox>
    </div>
    );
  }
}

export default TimeTable;