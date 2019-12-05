import React, { Component } from "react";

import "./style/Screen.css";

class Screen extends Component {
  render() {
    return (
      <div className="Screen">
        <div className="screenInfo">
          <div className="type">{this.props.type} </div>
          <div className="location">
            {this.props.location.id}관 {this.props.location.floor}층
          </div>
          <div className="totalSeat">{this.props.totalSeat}석</div>
        </div>
        <div className="times">
          {this.props.timeTable.map((info, index) => {
            return (
              <div className="item" key={index}>
                <div className="time">{info.time}</div>
                <div className="seatLeft">{info.seat}석</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Screen;
