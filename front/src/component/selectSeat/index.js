import React, { Component } from "react";

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
    if (this.state.selectedSeat.length >= 10) {
      alert("최대 선택");
    } else if (seatInfo.full) {
      alert("빈 좌석을 선택해주세요");
    } else {
      let seatIndex = this.state.selectedSeat.indexOf(seatInfo);
      if (seatIndex === -1) {
        this.setState(({ selectedSeat }) => ({
          selectedSeat: selectedSeat.concat(seatInfo)
        }));
      } else {
        this.setState(({ selectedSeat }) => ({
          selectedSeat: selectedSeat.filter(
            (seat, index) => index !== seatIndex
          )
        }));
      }
    }
  };
  render() {
    let reserveData = this.props.location.state;
    return (
      <div className="SelectSeat">
        <header>인원/좌석</header>
        <div className="mainWrap">
          <ScreenMap
            selectedSeat={this.state.selectedSeat}
            addSeat={this.addSeat}
          ></ScreenMap>
          <div className="reserveInfo">
            <div className="movieInfo">{reserveData.movie.name}</div>
            <div className="screenInfo">{reserveData.screen.name}</div>
            <div className="timeInfo">
              {`${reserveData.time.starttime.slice(
                0,
                2
              )}:${reserveData.time.starttime.slice(
                0,
                2
              )} ~ ${reserveData.time.endtime.slice(
                0,
                2
              )}:${reserveData.time.endtime.slice(0, 2)}`}
            </div>
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
