import React, { Component } from "react";
import axios from "axios";

import TheaterSelector from "component/theaterSelector";
import TimeTable from "component/timeTable";
import allTheaterList from "assets/testData/theaterList.json";

class TimeTablePage extends Component {
  constructor() {
    super();

    this.state = {
      allTheaterList: allTheaterList,
      favTheaterList: [],
      selectedTheater: allTheaterList[0].theaterList[0],
      timeTableList: null
    };

    // axios
    //   .get("/api/theaters")
    //   .then(res => {
    //     this.setState({
    //       allTheaterList: res.data
    //     });
    //     if (this.favTheaterList.length === 0) {
    //       this.selectTheater(
    //         res.data[0].areacode,
    //         res.data[0].theaterList[0].theatercode
    //       );
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    axios
      .get("/api/user/favtheaters")
      .then(res => {
        this.setState({
          favTheaterList: res.data
        });
        this.selectTheater(res.data[0].areacode, res.data[0].theatercode);
      })
      .catch(err => {
        console.log(err);
      });
  }

  selectTheater = theater => {
    this.setState({
      selectedTheater: theater,
      timeTableList: null
    });

    axios
      .get(`/theaters/timetable?theatercode=${this.props.theatercode}`)
      .then(res => {
        this.setState({
          timeTableList: res.data
        });
      });
  };
  render() {
    return (
      <div className="TimeTablePage">
        {this.state.allTheaterList === null ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <TheaterSelector
              {...this.state}
              selectTheater={this.selectTheater}
            ></TheaterSelector>
          </>
        )}
        {this.state.timeTableList === null ? (
          <h2>Loading...</h2>
        ) : (
          <TimeTable timeTableList={this.state.timeTableList}></TimeTable>
        )}
      </div>
    );
  }
}

export default TimeTablePage;
