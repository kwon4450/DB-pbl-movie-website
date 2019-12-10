import React, { Component } from "react";
import axios from "axios";

import allTheaterList from "assets/testData/theaterList.json";

class TimeTableUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTheaterList: allTheaterList,
      area: allTheaterList[0].areacode,
      theater: allTheaterList[0].theaterList[0].theatercode
    };

    axios
      .get("/api/theaters")
      .then(res => {
        let allTheaterList = res.data;
        this.setState({
          allTheaterList: allTheaterList,
          area: allTheaterList[0].areacode,
          theater: allTheaterList[0].theaterList[0].theatercode
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  selectArea = event => {
    console.log("area : ", event.target.value);
    this.setState({
      area: event.target.value
    });
  };

  selectTheater = event => {
    console.log("theater : ", event.target.value);
    this.setState({
      theater: event.target.value
    });
  };

  submitAction = async event => {
    event.preventDefault();

    const file = document.getElementById("timeTableFile").files[0];
    if (!file) return;
    const uploadedData = await new Response(file).text();

    let data = {
      area: this.state.area,
      theater: this.state.theater,
      json: uploadedData
    };
    axios
      .post("/api/admin/upload/timetable", { data })
      .then(res => {
        alert("업로드 완료");
      })
      .catch(err => {
        console.log(err);
        alert("에러 발생");
      });
  };

  renderForm = () => {
    if (this.state.allTheaterList === null) {
      return "영화관 정보를 로딩중입니다.";
    } else {
      return (
        <form onSubmit={this.submitAction}>
          <select name="area" onChange={this.selectArea}>
            <option value="default" disabled>
              지역
            </option>
            {this.state.allTheaterList.map(area => (
              <option value={area.areacode} key={area.areacode}>
                {area.areaname}
              </option>
            ))}
          </select>
          <select name="theater" onChange={this.selectTheater}>
            <option value="default" disabled>
              영화관
            </option>
            {this.state.allTheaterList
              .filter(area => area.areacode === this.state.area)[0]
              .theaterList.map(theater => {
                return (
                  <option value={theater.theatercode} key={theater.theatercode}>
                    {theater.theatername}
                  </option>
                );
              })}
          </select>
          <input
            type="file"
            id="timeTableFile"
            name="timeTableFile"
            accept=".json"
            required
          ></input>
          <button type="submit" className="submitBtn">
            업로드
          </button>
        </form>
      );
    }
  };
  render() {
    return (
      <div>
        <h2>TimeTableUpload</h2>
        {this.renderForm()}
      </div>
    );
  }
}

export default TimeTableUpload;
