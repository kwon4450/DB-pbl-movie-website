import React, { Component } from "react";
import axios from "axios";

import TheaterSelector from "component/theaterSelector";
import TimeTable from "component/timeTable";

class TimeTablePage extends Component {
  constructor() {
    super();

    this.state = {
      allTheaterList: null,
      favTheaterList: [],
      selectedTheater: null
    };

    axios
      .get("/api/theaters")
      .then(res => {
        if (typeof res.data === "object") {
          console.log(res.data, "get theaterList success");
          this.setState({
            allTheaterList: res.data.allTheaterList,
            favTheaterList: res.data.favTheaterList
          });

          if (res.data.favTheaterList.length === 0) {
            this.selectTheater(res.data.allTheaterList[0].theaterList[0]);
          } else {
            this.selectTheater(res.data.favTheaterList[0].theaterList[0]);
          }
        } else {
          this.selectTheater();
          console.log(res.data, "get theaterList err");
        }
      })
      .catch(err => {
        console.log(err, "get theaterList err");
      });
  }

  selectTheater = theater => {
    console.log("setting selectTheater to", theater);
    this.setState({
      selectedTheater: theater
    });
  };

  renderTheaterSelector() {
    let jsx;
    if (this.state.allTheaterList === null) {
      jsx = <h2>Loading...</h2>;
    } else if (typeof this.state.allTheaterList === "object") {
      jsx = (
        <TheaterSelector
          allTheaterList={this.state.allTheaterList}
          favTheaterList={this.state.favTheaterList}
          selectTheater={this.selectTheater}
        ></TheaterSelector>
      );
    } else {
      jsx = <h2>Fail to loading theaters :(</h2>;
    }
    return jsx;
  }

  render() {
    return (
      <div className="TimeTablePage">
        {this.renderTheaterSelector()}
        <TimeTable selectedTheater={this.state.selectedTheater}></TimeTable>;
      </div>
    );
  }
}

export default TimeTablePage;
