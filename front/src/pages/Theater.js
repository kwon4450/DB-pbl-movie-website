import React, { Component } from "react";
import axios from "axios";

import TheaterSelector from "component/theaterSelector";
import TheaterInfo from "component/TheaterInfo";
import TimeTable from "component/timeTable";
import allTheaterList from "assets/testData/theaterList.json";
// let allTheaterList;

class Theater extends Component {
  constructor() {
    super();

    this.state = {
      allTheaterList: allTheaterList,
      favTheaterList: [],
      selectedTheater: null,
      timeTableList: null
    };

    axios
      .get("/api/theaters")
      .then(res => {
        if (typeof res.data === "object") {
          this.setState({
            allTheaterList: res.data.allTheaterList,
            favTheaterList: res.data.favTheaterList
          });

          if (res.data.favTheaterList.length === 0) {
            this.selectTheater(res.data.allTheaterList[0].theaterList[0]);
          } else {
            this.selectTheater(res.data.favTheaterList[0].theaterList[0]);
          }
          console.log(res.data, "get theaterList success");
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
    this.setState({
      selectedTheater: theater,
      timeTableList: null
    });
    if (typeof theater === "object") {
      axios
        .get(`/theaters/timetable?theatercode=${theater.theatercode}`)
        .then(res => {
          console.log(res.data, "get timeTable data success");
          this.setState({
            timeTableList: res.data
          });
        })
        .catch(err => {
          this.setState({
            timeTableList: undefined
          });
          console.log(err, "get timeTable data err");
        });
    } else {
      this.setState({
        timeTableList: undefined
      });
    }
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

  renderTheaterInfo() {
    let jsx;

    if (this.state.selectedTheater === null) {
      jsx = <h2>Loading...</h2>;
    } else if (typeof this.state.selectedTheater === "object") {
      jsx = <TheaterInfo {...this.state.selectedTheater}></TheaterInfo>;
    } else {
      jsx = <h2>Fail to loading theater information :(</h2>;
    }
    return jsx;
  }

  renderTimeTable() {
    let jsx;
    console.log(this.state.timeTableList, "current timeTableList");
    if (this.state.timeTableList === null) {
      jsx = <h2>Loading...</h2>;
    } else if (typeof this.state.timeTableList === "object") {
      jsx = <TimeTable timeTableList={this.state.timeTableList}></TimeTable>;
    } else {
      jsx = <h2>Fail to loading theaters :(</h2>;
    }
    return jsx;
  }

  render() {
    return (
      <div className="Theater">
        {this.renderTheaterSelector()}
        {this.renderTheaterInfo()}
        {this.renderTimeTable()}
      </div>
    );
  }
}

export default Theater;
