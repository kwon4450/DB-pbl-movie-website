import React, { Component } from 'react';

class Seat extends Component{
  static defaultProps = {
    isDummy: false
  }
  render() {
    return(
      <div className={'Seat'+(this.props.seatInfo.full?' full':'')+(this.props.isDummy?' deactive':'')}>
        {this.props.seatInfo.col}
      </div>
    );
  }
}

export default Seat;