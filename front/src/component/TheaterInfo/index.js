import React, { Component } from "react";
import "./style/TheaterInfo.css";
import Axios from "axios";

class TheaterInfo extends Component {
  state = {
    favTheaterList: null
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    return { favTheaterList: nextProps.favTheaterList };
  }
  deleteFavTheater = () => {
    let data = { theaterid: this.props.selectedTheater.theatercode };
    Axios.post("/api/theaters/deletefavoritetheater", { data })
      .then(res => {
        console.log(res);
        alert("자주가는 영화관에서 제거되었습니다!");
        this.props.getFavTheaterList();
      })
      .catch(err => {
        console.log(err);
      });
  };
  addFavTheater = () => {
    let data = { theaterid: this.props.selectedTheater.theatercode };
    Axios.post("/api/theaters/favoritetheater", { data })
      .then(res => {
        console.log(res);
        alert("자주가는 영화관으로 등록되었습니다!");
        this.props.getFavTheaterList();
      })
      .catch(err => {
        console.log(err);
        alert("먼저 로그인을 해주세요");
        this.props.history.push("/user/login");
      });
  };
  render() {
    console.log(this.state.favTheaterList, this.props.selectedTheater);
    return (
      <div className="TheaterInfo">
        <h1>THEATER</h1>
        {this.state.favTheaterList
          .map(item => item.theatercode)
          .indexOf(this.props.selectedTheater.theatercode) === -1 ? (
          <button className="favTheaterBtn" onClick={this.addFavTheater}>
            자주가는 영화관으로 추가하기
          </button>
        ) : (
          <button className="favTheaterBtn" onClick={this.deleteFavTheater}>
            자주가는 영화관에서 제거하기
          </button>
        )}

        <div className="theaterInfo_wrap">
          <h2>{this.props.selectedTheater.theatername}</h2>
          <div className="detailLocation">
            {this.props.selectedTheater.address}
          </div>
          <br></br>
          <div className="tele">{this.props.selectedTheater.tele}</div>
          <div className="totalScreen">
            {this.props.selectedTheater.totalscreens}관 /{" "}
            {this.props.selectedTheater.totalseats}석
          </div>
        </div>
      </div>
    );
  }
}

export default TheaterInfo;
