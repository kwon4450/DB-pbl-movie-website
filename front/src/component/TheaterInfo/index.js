import React, { Component } from "react";
import "./style/TheaterInfo.css";
import Axios from "axios";

class TheaterInfo extends Component {
  addFavTheater = () => {
    let data = { theaterid: this.props.theatercode };
    Axios.post("/api/theaters/favoritetheater", { data })
      .then(res => {
        console.log(res);
        alert("자주가는 영화관으로 등록되었습니다!");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    console.log(this.props);
    return (
      <div className="TheaterInfo">
        <h1>THEATER</h1>
        <button className="favTheaterBtn" onClick={this.addFavTheater}>
          자주가는 영화관으로 추가하기
        </button>
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
