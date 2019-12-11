import React, { Component } from "react";
import axios from "axios";

import TheaterSelector from "component/theaterSelector";
import TheaterInfo from "component/TheaterInfo";
import TimeTable from "component/timeTable";

class Theater extends Component {
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
        <>
          <TheaterSelector
            allTheaterList={this.state.allTheaterList}
            favTheaterList={this.state.favTheaterList}
            selectTheater={this.selectTheater}
            selectedTheater={this.state.selectedTheater}
          ></TheaterSelector>

          <TheaterInfo {...this.state.selectedTheater}></TheaterInfo>
        </>
      );
    } else {
      jsx = <h2>Fail to loading theaters :(</h2>;
    }
    return jsx;
  }

  render() {
    return (
      <div className="Theater">
        {this.renderTheaterSelector()}
        <TimeTable selectedTheater={this.state.selectedTheater}></TimeTable>
      </div>
    );
  }
}

export default Theater;
