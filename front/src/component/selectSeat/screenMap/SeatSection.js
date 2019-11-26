import React, { Component } from 'react';

import Seat from './Seat';

class SeatSection extends Component{
  static defaultProps = {
    isDummy: false
  }

  renderSeat = () => {
    let jsx = [];
    let tmp = [];
    // let tableHead = [];
    let bSeat = {
      row:this.props.data.seats[0].row,
      col:this.props.data.start_col-1
    };

    // if(this.props.data.start_col === 1){
    //   tableHead.push((<td className="rowName" key={0}>{String.fromCharCode(bSeat.row+64)}</td>));
    // }
    
    for(const seat of this.props.data.seats) {
      if(bSeat.row < seat.row) {
        jsx.push(<tr className='SeatRow' key={bSeat.row}>{tmp}</tr>);
        tmp = [];
        // if(this.props.data.start_col === 1){
        //   tableHead.push((<td className="rowName" key={bSeat.row}>{String.fromCharCode(bSeat.row+65)}</td>));
        // }
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
    let retVal = [];
    if (this.props.isDummy) {
      retVal.push(<td className='SeatSection dummy'></td>);
    } else {
      let jsx = this.renderSeat();

      if (this.props.data.col_i === 1){
        retVal.push(
          <td className='RowAlphabet'>
            <table>
              <thead>
              </thead>
            </table>
          </td>
        );
      }

      retVal.push(
        <td className='SeatSection'>
          <table>
            <tbody>
              {jsx}
            </tbody>
          </table>
        </td>
      );
    }
    return retVal;
  }
}

export default SeatSection;