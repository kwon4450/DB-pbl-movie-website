import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style/Screen.css";

class Screen extends Component {
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
          <div className="type">{this.props.screen.type} </div>
          <div className="name">{this.props.screen.name}</div>
          <div className="totalSeat">{this.props.screen.total}석</div>
        </div>
        <div className="times">
          {this.props.screen.timetables.map((item, index) => {
            return (
              <Link
                to={{
                  pathname: "/ticketing/reserve",
                  state: {
                    ...this.props.reserveData,
                    screen: { ...this.props.screen, timetables: undefined },
                    time: item
                  }
                }}
                key={index}
              >
                <div className="item">
                  <div className="time">{this.getTime(item)}</div>
                  <div className="seatLeft">{item.seat}좌석</div>
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
