import React, { Component } from "react";

class MyPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span>{this.props.match.params.userID}</span>'s MyPage
      </div>
    );
  }
}

export default MyPage;
