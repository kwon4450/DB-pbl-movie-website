import React, { Component } from "react";
import axios from "axios";

class TimeTableUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTheaterList: null,
      area: null,
      theater: null
    };

    axios
      .get("/api/theaters")
      .then(res => {
        let allTheaterList = res.data.allTheaterList;
        console.log(allTheaterList);
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
      theatercode: this.state.theater,
      date: '2019-12-12',
      json: uploadedData
    };
    axios
      .post("/api/admin/upload/timetable", { data })
      .then(res => {
        alert(res.data.info);
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
