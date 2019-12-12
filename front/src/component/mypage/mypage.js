import React, { Component } from "react";

import "./style/mypage.css";

class Mypage extends Component {
  render() {
    console.log(this.props.data);
    let user = this.props.data.user;
    let favList = this.props.data.favoritetheaterList;
    let reservationList = this.props.data.reservationList;
    let wishList = this.props.data.wishList;

    console.log(user, favList, reservationList, wishList);
    return (
      <div className="MyPage">
        <div className="User">
          <div className="UserInfo">{user.l_name + user.f_name}님</div>
          <div className="UserId">ID : {user.user_id}</div>
          <div className="UserGrade">등급 : {user.class}</div>
          <div className="UserFavorite">
            자주가는 영화관 :{" "}
            {favList.map(item => {
              return item.theatername;
            })}
          </div>
        </div>
        <h2 className="myticket">MY 예매내역</h2>
        <div className="MyTicketing">
          {reservationList.map((reservation, index) => {
            return (
              <div key={index}>
                <div className="Ticket">
                  예매 번호 : {reservation.reservationcode}
                </div>
                <div>{reservation.movietitle}</div>
                <div>관람극장 : {reservation.theatername}</div>
                <div>상영관 : {reservation.screenname}</div>
                <div>관람일시 : {reservation.startdate}</div>
                <div>
                  시작시간 :{" "}
                  {reservation.starttime.slice(0, 2) +
                    ":" +
                    reservation.starttime.slice(2)}
                </div>
                <div>결제정보 : {reservation.paymenttype}</div>
                <div>
                  예매 좌석 :{" "}
                  {reservation.seatList.map(
                    item => ` ${String.fromCharCode(item.col + 64)}${item.row}`
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mypage;
