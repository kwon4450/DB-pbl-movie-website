import React, { Component } from "react";
import "./style/TheaterInfo.css";

class TheaterInfo extends Component {
  render() {
    return (
      <div className="TheaterInfo">
        <h1>THEATER</h1>
        <div className="theaterInfo_wrap">
          <h2>{this.props.theatername}</h2>
          <div className="detailLocation">{this.props.address}</div>
          <br></br>
          <div className="tele">{this.props.tele}</div>
          <div className="totalScreen">
            {this.props.totalscreens}관 / {this.props.totalseats}석
          </div>
        </div>
      </div>
    );
  }
}

export default TheaterInfo;
