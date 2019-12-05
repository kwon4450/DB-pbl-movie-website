import React, { Component } from "react";

import MovieChart from "component/moviechart";
import ScreenMap from "./screenMap";
import "./style/SelectSeat.css";

class SelectSeat extends Component {
  // todo: selectedSeat 전달하기

  static defaultProps = {
    movieInfo: "겨울왕국",
    screenInfo: "DBV강남"
  };
  state = {
    selectedSeat: []
  };

  addSeat = seatInfo => {
    if (!seatInfo.full) {
      this.setState(({ selectedSeat }) => ({
        selectedSeat: selectedSeat.concat(seatInfo)
      }));
    } else {
      alert("빈 좌석을 선택해주세요");
    }
  };
  render() {
    return (
      <div className="SelectSeat">
        <header>인원/좌석</header>
        <div className="mainWrap">
          <ScreenMap addSeat={this.addSeat}></ScreenMap>
          <div className="reserveInfo">
            <div className="movieInfo">{this.props.movieInfo}</div>
            <div className="screenInfo">{this.props.screenInfo}</div>
            <div className="numOfPeople">
              {this.state.selectedSeat.length}
              <div className="seatInfo">
                {this.state.selectedSeat.map((item, index) => (
                  <div className="item" key={index}>
                    {String.fromCharCode(item.row + 65)}열 {item.col}석
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <nav className="ticketingStatus"></nav>
      </div>
    );
  }
}

export default SelectSeat;
