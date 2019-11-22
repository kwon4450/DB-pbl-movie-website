import React, { Component } from 'react';

class Seat extends Component{
  static defaultProps = {
    isDummy: false
  }
  render() {
    if(this.props.isDummy) {
      return (
        <td className='Seat dummy'></td>
      );
    }
    return (
      <td className={'Seat'+(this.props.seatInfo.full?' full':'')}>
        {this.props.seatInfo.col}
      </td>
    );
  }
}

export default Seat;