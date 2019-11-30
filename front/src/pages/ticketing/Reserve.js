import React, { Component } from "react";

import SelectSeat from "../../component/selectSeat";

class Reserve extends Component {
  render() {
    return (
      <div className="Reserve">
        <SelectSeat {...this.props}></SelectSeat>
      </div>
    );
  }
}

export default Reserve;
