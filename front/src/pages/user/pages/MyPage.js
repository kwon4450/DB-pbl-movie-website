import React, { Component } from "react";
import Mypage from "component/mypage/mypage";
import axios from "axios";

class MyPage extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    axios
      .get("/api/user/mypage")
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          data: false
        });
      });
  }
  render() {
    if (this.state.data === null) {
      return <h2>Loading...</h2>;
    } else if (typeof this.state.data === "object") {
      return <Mypage {...this.props} data={this.state.data}></Mypage>;
    } else {
      return <h2>Fail to loading Mypage :(</h2>;
    }
  }
}

export default MyPage;
