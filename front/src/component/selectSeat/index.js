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
      let seatIndex = this.state.selectedSeat.indexOf(seatInfo);
      if (seatIndex === -1) {
        console.log("select");
        this.setState(({ selectedSeat }) => ({
          selectedSeat: selectedSeat.concat(seatInfo)
        }));
      } else {
        console.log("toggle");
        this.setState(({ selectedSeat }) => ({
          selectedSeat: selectedSeat.filter(
            (seat, index) => index !== seatIndex
          )
        }));
      }
    } else {
      alert("빈 좌석을 선택해주세요");
    }
  };
  render() {
    return (
      <div className="SelectSeat">
        <header>인원/좌석</header>
        <div className="mainWrap">
          <ScreenMap
            selectedSeat={this.state.selectedSeat}
            addSeat={this.addSeat}
          ></ScreenMap>
          <div className="reserveInfo">
            <div className="movieInfo">{this.props.movieInfo}</div>
            <div className="screenInfo">{this.props.screenInfo}</div>
            <button
              className="reset"
              onClick={() => this.setState({ selectedSeat: [] })}
            >
              reset
            </button>
            <div className="numOfPeople">
              <div className="totalLength">
                {this.state.selectedSeat.length}
              </div>
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
