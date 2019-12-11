import React, { Component } from "react";
import Mypage from "component/mypage/mypage";
import axios from "axios";

class MyPage extends Component {
  componentDidMount() {
    axios.get("/api/user/mypage");
  }
  render() {
    console.log("go to mypage", this.props);
    return <Mypage {...this.props}></Mypage>;
  }
}

export default MyPage;
