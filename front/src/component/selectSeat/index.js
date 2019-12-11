import React, { Component } from "react";
import axios from "axios";

import ScreenMap from "./screenMap";
import "./style/SelectSeat.css";

class SelectSeat extends Component {
  state = {
    adult: 0,
    teenager: 0,
    paymentType: "카드",
    selectedSeat: []
  };

  handleTeenager = num => {
    if (this.state.selectedSeat.length > this.state.adult + num) {
      alert("선택하신 인원보다 선택된 좌석 수가 더 많습니다");
    } else {
      this.setState({ teenager: num });
    }
  };

  handleAdult = num => {
    if (this.state.selectedSeat.length > this.state.teenager + num) {
      alert("선택하신 인원보다 선택된 좌석 수가 더 많습니다");
    } else {
      this.setState({ adult: num });
    }
  };

  addSeat = seatInfo => {
    let seatIndex = this.state.selectedSeat.indexOf(seatInfo);
    if (seatIndex !== -1) {
      this.setState(({ selectedSeat }) => ({
        selectedSeat: selectedSeat.filter((seat, index) => index !== seatIndex)
      }));
    } else if (this.state.adult + this.state.teenager === 0) {
      alert("먼저 인원을 선택해주세요");
    } else if (
      this.state.selectedSeat.length >=
      this.state.adult + this.state.teenager
    ) {
      alert("이미 좌석을 모두 선택하였습니다");
    } else if (seatInfo.full) {
      alert("빈 좌석을 선택해주세요");
    } else {
      this.setState(({ selectedSeat }) => ({
        selectedSeat: selectedSeat.concat(seatInfo).sort(function(a, b) {
          if (a.row > b.row) {
            return 1;
          } else if (a.row < b.row) {
            return -1;
          } else {
            if (a.col >= b.col) {
              return 1;
            } else {
              return -1;
            }
          }
        })
      }));
    }
  };

  setPaymentType = e => {
    this.setState({ paymentType: e.target.value });
  };

  sendReserveData = () => {
    if (this.state.selectedSeat.length === 0) {
      alert("먼저 좌석을 선택해주세요");
    } else if (
      this.state.selectedSeat.length <
      this.state.adult + this.state.teenager
    ) {
      alert("좌석을 모두 선택해주세요");
    } else {
      console.log("check props before send", this.props);
      let reserveData = this.props.location.state;
      console.log(reserveData);
      let d = reserveData.day;
      let selectedDate = `${d.year}-${d.month}-${d.date}`;
      const data = {
        payment_type: this.state.paymentType,
        theater_id: reserveData.theater.theatercode,
        timetable_id: reserveData.time.timetableid,
        seats: this.state.selectedSeat,
        adult: this.state.adult,
        teenager: this.state.teenager,
        date: selectedDate
      };
      console.log("check data before send", data);
      axios
        .post("/api/reservation", { data })
        .then(res => {
          console.log(res.data.info);
          alert("예매가 완료되었습니다!");
          this.props.history.push(`/user/mypage/:${""}`);
        })
        .catch(err => {
          const res = err.response;
          switch (res.status) {
            case 401:
              alert(res.data.reason);
              this.props.history.push("/user/login");
              break;
            default:
              alert(err);
              console.log(res.status);
              break;
          }
        });
    }
  };

  render() {
    let reserveData = this.props.location.state;
    let t = reserveData.time;
    let d = reserveData.day;
    return (
      <div className="SelectSeat">
        <header>
          <h2>인원/좌석 선택</h2>
        </header>
        <div className="wrap mainWrap">
          <ScreenMap
            seatList={reserveData.time.seatList}
            selectedSeat={this.state.selectedSeat}
            addSeat={this.addSeat}
          ></ScreenMap>
          <div className="wrap wrap_col">
            <div className="reserveInfo">
              <div className="wrap">
                <div className="wrap wrap_col">
                  <div className="wrap box">
                    <div className="movieInfo">
                      {reserveData.movie.movietitle}
                    </div>
                    <div className="theaterInfo">
                      {reserveData.theater.theatername}
                    </div>
                    <div className="screenInfo">
                      {reserveData.screen.screenname}
                    </div>
                  </div>
                  <div className="wrap">
                    <div className="timeInfo">
                      {`${d.year}.${d.month}.${d.date} (${d.day})
                        ${t.starttime.slice(0, 2)}:${t.starttime.slice(2)} ~
                        ${t.endtime.slice(0, 2)}:${t.endtime.slice(2)}`}
                    </div>
                  </div>
                </div>
                <button
                  className="reset"
                  onClick={() => this.setState({ selectedSeat: [] })}
                >
                  reset
                </button>
              </div>
            </div>

            <div className="numOfPeople">
              <div className="wrap">
                <div className="peopleSelector">
                  <div className="wrap">
                    <div className="label">성인</div>
                    <ul className="selectBox wrap">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                        <li
                          className={`item${
                            this.state.adult === item ? " selected" : ""
                          }`}
                          onClick={() => this.handleAdult(item)}
                          key={item}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wrap">
                    <div className="label">청소년</div>
                    <ul className="selectBox wrap">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                        <li
                          className={`item${
                            this.state.teenager === item ? " selected" : ""
                          }`}
                          onClick={() => this.handleTeenager(item)}
                          key={item}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="seatInfo">
                {"선택한 좌석 : "}
                {this.state.selectedSeat.map(
                  (item, index) =>
                    String.fromCharCode(item.row + 65) +
                    item.col +
                    (this.state.selectedSeat.length - 1 === index ? "" : ", ")
                )}
              </div>
              <div className="peopleInfo">
                {"인원 : "}
                {this.state.adult !== 0 ? `성인 ${this.state.adult}명` : ""}

                {this.state.adult !== 0 && this.state.teenager !== 0
                  ? ", "
                  : ""}
                {this.state.teenager !== 0
                  ? `청소년 ${this.state.teenager}명`
                  : ""}
              </div>
              <div className="priceInfo">
                <div className="price">
                  {"총 가격 : "}
                  {this.state.adult !== 0
                    ? `성인 ${this.state.adult} X 10000`
                    : ""}
                  {this.state.adult !== 0 && this.state.teenager !== 0
                    ? " + "
                    : ""}
                  {this.state.teenager !== 0
                    ? `청소년 ${this.state.teenager} X 7000`
                    : ""}
                  <br />
                  {` = ${this.state.teenager * 7000 +
                    this.state.adult * 10000}`}
                </div>
              </div>
              <div className="paymentInfo">
                {"결제 방식 : "}
                <select onChange={this.setPaymentType}>
                  <option value="카드">카드</option>
                  <option value="무통장입금">무통장 입금</option>
                  <option value="휴대폰결제">휴대폰 소액결제</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn goPayment" onClick={this.sendReserveData}>
            결제하기
            <br />
            <span>{">"}</span>
          </button>
        </div>
        <nav className="ticketingStatus"></nav>
      </div>
    );
  }
}

export default SelectSeat;
