import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style/Screen.css";

class Screen extends Component {
  getLeftSeat = seatList => {
    let left = 0;
    for (const seatSection of seatList) {
      for (const seat of seatSection.seats) {
        if (!seat.full) left += 1;
      }
    }
    return left;
  };

  getTime = item => {
    let time = `${item.starttime.slice(0, 2)}:${item.starttime.slice(
      2
    )} ~ ${item.endtime.slice(0, 2)}:${item.endtime.slice(2)}`;
    return time;
  };

  render() {
    return (
      <div className="Screen">
        <div className="screenInfo">
          <div className="type">{this.props.screen.screentype} </div>
          <div className="name">{this.props.screen.screenname}</div>
          <div className="totalSeat">{this.props.screen.totalseats}석</div>
        </div>
        <div className="times">
          {this.props.screen.timetableList.map((item, index) => {
            return (
              <Link
                to={{
                  pathname: "/ticketing/reserve",
                  state: {
                    ...this.props.reserveData,
                    screen: { ...this.props.screen, timetableList: undefined },
                    time: item
                  }
                }}
                key={index}
              >
                <div className="item">
                  <div className="time">{this.getTime(item)}</div>
                  <div className="seatLeft">
                    {this.getLeftSeat(item.seatList)}좌석
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Screen;
