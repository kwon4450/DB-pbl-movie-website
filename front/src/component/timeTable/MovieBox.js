import React, { Component } from 'react';

import Movie from './Movie';

class MovieBox extends Component{
  state = {
    movieTimeTableInfo: [
      {
        isOn:true,
        genre:"애니매이션",
        runningTime:103,
        releaseDate:"2019.11.21",
        screenInfo: [
          {
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
          },
          {
            type: '3D',
            location: {
              id: '2',
              floor: '6'
            },
            totalSeat: '145',
            timeTable: [
              {
                time: '13:30',
                seat: '15'
              },
              {
                time: '15:45',
                seat: '40'
              },
              {
                time: '16:50',
                seat: '65'
              }
            ]
          },
        ]
      }
    ]
  }
  render() {
    return(
      <div className='MovieBox'>
        {this.state.movieTimeTableInfo.map((item, index) => <Movie {...item} key={index}></Movie>)}
      </div>
    );
  }
}

export default MovieBox;