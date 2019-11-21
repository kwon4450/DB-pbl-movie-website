import React, { Component } from 'react';

class ScreenTimeTable extends Component{
  render() {
    return(
      <div className='item'>
        <div className='time'>{this.props.time}</div>
        <div className='seatLeft'>{this.props.seat}석</div>
      </div>
    );
  }
}

export default ScreenTimeTable;