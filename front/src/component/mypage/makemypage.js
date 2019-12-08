import React, { Component } from "react";
import Mypage from "./mypage";

class MakeMypage extends Component {
  Mypagedata = [
    {
      name: "윤병서",
      id: "bsyun0571",
      grade: "vip",
      favorite: "DBV수원, DBV안산",
      ticket: {
        ticketnum: "0012-1129-3922-295",
        moviename: "겨울왕국 2",
        screen: "CGV 수원",
        date: "2019.11.29",
        paymentInfo: "카카오페이"
      }
    }
  ];
  render() {
    return (
      <div className="MyPageComp">
        {this.Mypagedata.slice(0, 1).map((Mypagedata, index) => {
          return <Mypage {...Mypagedata} key={index}></Mypage>;
        })}
      </div>
    );
  }
}

export default MakeMypage;
