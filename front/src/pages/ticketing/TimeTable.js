import React, { Component } from "react";
import TheaterSelector from "component/theaterSelector";
import ShowTime from "component/timeTable";

class TimeTable extends Component {
  render() {
    return (
      <div className="TimeTable">
        <TheaterSelector></TheaterSelector>
        <ShowTime></ShowTime>
      </div>
    );
  }
}

export default TimeTable;
