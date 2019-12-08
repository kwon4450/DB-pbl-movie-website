import React, { Component } from "react";

class Mypage extends Component {
  render() {
    return (
      <div className="MyPage">
        <div className="User">
          <div className="UserInfo">{this.props.name}님</div>
          <div className="UserId">ID : {this.props.id}</div>
          <div className="UserGrade">등급 : {this.props.grade}</div>
          <div className="UserFavorite">
            자주가는 영화관 : {this.props.favorite}
          </div>
        </div>
        <h2 className="myticket">MY 예매내역</h2>
        <div className="MyTicketing">
          <div className="Ticket">
            예매 번호 : {this.props.ticket.ticketnum}
          </div>
          <div>{this.props.ticket.moviename}</div>
          <div>관람극장 : {this.props.ticket.screen}</div>
          <div>관람일시 : {this.props.ticket.date}</div>
          <div>결제정보 : {this.props.ticket.paymentInfo}</div>
        </div>
      </div>
    );
  }
}

export default Mypage;
