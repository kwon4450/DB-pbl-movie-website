import React, { Component } from 'react';

import Screen from './Screen';

class Movie extends Component{
  render() {
    return(
      <div className='movie'>
        <div className='Info'>
          <h3>Frozen</h3>
          <div className='isOn'>{this.props.isOn?"상영중":"예매중"}</div>
          <div className='genre'>{this.props.genre}</div>
          <div className='runningTime'>{this.props.runningTime}분</div>
          <div className='releaseDate'>{this.props.releaseDate}개봉</div>
        </div>
        <div className='screenBox'>
          {this.props.screenInfo.map((info, index) => <Screen {...info} key={index}></Screen>)}
        </div>
      </div>
    );
  }
}

export default Movie;