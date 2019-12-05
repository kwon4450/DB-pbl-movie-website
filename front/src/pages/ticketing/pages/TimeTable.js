import React, { Component } from "react";
import TheaterSelector from "component/theaterSelector";
import TimeTable from "component/timeTable";

class TimeTablePage extends Component {
  render() {
    return (
      <div className="TimeTablePage">
        <TheaterSelector></TheaterSelector>
        <TimeTable></TimeTable>
      </div>
    );
  }
}

export default TimeTablePage;
