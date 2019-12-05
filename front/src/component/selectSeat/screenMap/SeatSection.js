import React, { Component } from "react";

import Seat from "./Seat";

class SeatSection extends Component {
  static defaultProps = {
    isDummy: false
  };

  renderSeat = () => {
    let tableBody = [];
    let tableHead = [];
    let tmp = [];
    let bSeat = {
      row: this.props.data.seats[0].row,
      col: this.props.data.start_col - 1
    };

    if (this.props.data.start_col === 1) {
      tableHead.push(
        <tr>
          <td className="rowName" key={0}>
            {String.fromCharCode(bSeat.row + 64)}
          </td>
        </tr>
      );
    }

    for (const seat of this.props.data.seats) {
      if (bSeat.row < seat.row) {
        tableBody.push(
          <tr className="SeatRow" key={bSeat.row}>
            {tmp}
          </tr>
        );
        tmp = [];
        if (this.props.data.start_col === 1) {
          tableHead.push(
            <tr>
              <td className="rowName" key={bSeat.row}>
                {String.fromCharCode(bSeat.row + 65)}
              </td>
            </tr>
          );
        }
      }
      if (seat.col - bSeat.col > 1) {
        for (let i = bSeat.col + 1; i < seat.col; i++) {
          tmp.push(<Seat isDummy={true} key={i}></Seat>);
        }
      }
      tmp.push(
        <Seat
          addSeat={this.props.addSeat}
          seatInfo={seat}
          key={seat.col}
        ></Seat>
      );

      bSeat = seat;
    }
    tableBody.push(
      <tr className="SeatRow" key={bSeat.row}>
        {tmp}
      </tr>
    );

    return [tableBody, tableHead];
  };

  render() {
    let retVal = [];
    if (this.props.isDummy) {
      retVal.push(<td className="SeatSection dummy"></td>);
    } else {
      let jsx = this.renderSeat();

      if (this.props.data.col_i === 1) {
        retVal.push(
          <td className="RowAlphabet" key="RowAlphabet">
            <table>
              <thead>{jsx[1]}</thead>
            </table>
          </td>
        );
      }

      retVal.push(
        <td className="SeatSection" key={this.props.data.col_i}>
          <table>
            <tbody>{jsx[0]}</tbody>
          </table>
        </td>
      );
    }
    return retVal;
  }
}

export default SeatSection;
