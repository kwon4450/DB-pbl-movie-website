import React, { Component } from 'react';

import Screen from './Screen';

class Movie extends Component{
  ScreenInfo={
    type: '2D',
    location: {
      id: '1',
      floor: '6'
    },
    totalSeat: '158',
    timeTable: [
      {
        time: '16:30',
        seat: '65'
      },
      {
        time: '18:30',
        seat: '100'
      },
      {
        time: '20:30',
        seat: '140'
      }
    ]
  }
  render() {
    return(
      <div className='movie'>
        <div className='Info'>
          <h3>Frozen</h3>
          <div className='isOn'>상영중</div>
          <div className='genre'>애니메이션</div>
          <div className='runningTime'>103분</div>
          <div className='releaseDate'>2019.11.21 개봉</div>
        </div>
        <div className='screenBox'>
          <Screen {...this.ScreenInfo}></Screen>
        </div>
      </div>
    );
  }
}

export default Movie;