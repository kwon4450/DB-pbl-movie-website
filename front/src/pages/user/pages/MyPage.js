import React, { Component } from "react";
import Mypage from "component/mypage/mypage";

class MyPage extends Component {
  render() {
    console.log("go to mypage", this.props);
    return <Mypage></Mypage>;
  }
}

export default MyPage;
