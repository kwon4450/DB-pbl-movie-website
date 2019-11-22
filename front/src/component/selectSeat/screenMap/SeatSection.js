import React, { Component } from 'react';

import Seat from './Seat';

class SeatSection extends Component{
  renderSeat = () => {
    let jsx = [];
    let tmp = [];
    let bSeat = {col:this.props.startCol-1};
    for(const seat of this.props.seats) {
      if(bSeat.row < seat.row) {
        jsx.push(<div className='SeatRow' key={bSeat.row}>{tmp}</div>);
        tmp = [];
      }
      if(seat.col-bSeat.col > 1) {
        for(let i=bSeat.col+1; i<seat.col; i++) {
          tmp.push(<Seat seatInfo={{col:i, full:false}} isDummy={true} key={i}></Seat>)
        }
      }
      tmp.push((<Seat seatInfo={seat} key={seat.col}></Seat>));

      bSeat = seat;
    }
    jsx.push(<div className='SeatRow' key={bSeat.row}>{tmp}</div>);

    return jsx;
  }

  render() {
    // if(this.props.isDummy){
    //   return(<div></div>)
    // }
    return(
      <div className='SeatSection'>
        {this.renderSeat()}
      </div>
    );
  }
}

export default SeatSection;