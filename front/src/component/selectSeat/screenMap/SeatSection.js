import React, { Component } from 'react';

import Seat from './Seat';

class SeatSection extends Component{
  static defaultProps = {
    isDummy: false
  }

  renderSeat = () => {
    let jsx = [];
    let tmp = [];
    let bSeat = {
      row:this.props.seats[0].row,
      col:this.props.startCol-1
    };
    if(this.props.startCol == 1){
      tmp.push((<td className="rowName">{String.fromCharCode(bSeat.row+64)}</td>));
    }
    
    for(const seat of this.props.seats) {
      if(bSeat.row < seat.row) {
        jsx.push(<tr className='SeatRow' key={bSeat.row}>{tmp}</tr>);
        tmp = [];
        if(this.props.startCol == 1){
          tmp.push((<td className="rowName">{String.fromCharCode(bSeat.row+65)}</td>));
        }
      }
      if(seat.col-bSeat.col > 1) {
        for(let i=bSeat.col+1; i<seat.col; i++) {
          tmp.push(<Seat isDummy={true} key={i}></Seat>)
        }
      }
      tmp.push((<Seat seatInfo={seat} key={seat.col}></Seat>));

      bSeat = seat;
    }
    jsx.push(<tr className='SeatRow' key={bSeat.row}>{tmp}</tr>);

    return jsx;
  }

  render() {
    if(this.props.isDummy){
      return(<td className='SeatSection dummy'></td>);
    }
    return(
      <td className='SeatSection'>
        <table>
          {this.renderSeat()}
        </table>
      </td>
    );
  }
}

export default SeatSection;