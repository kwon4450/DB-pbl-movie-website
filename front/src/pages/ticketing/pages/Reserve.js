import React, { Component } from "react";

import SelectSeat from "component/selectSeat";

class Reserve extends Component {
  componentDidMount() {
    let reserveData = this.props.location.state;
    console.log("check props before render", reserveData);
    if (!reserveData || Object.keys(reserveData).length === 0) {
      alert("잘못된 접근입니다!");

      this.props.history.goBack();
    }
  }
  render() {
    return (
      <div className="Reserve">
        <SelectSeat {...this.props}></SelectSeat>
      </div>
    );
  }
}

export default Reserve;
