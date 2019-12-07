import React, { Component } from "react";
import axios from "axios";
import testData from "assets/testData/TheaterName.json";

class TimeTableUpload extends Component {
  state = {
    theaterData: null,
    region: null
  };

  constructor(props) {
    super(props);
    // todo: axios로 서버에서 영화관 정보 땡겨오기
    setTimeout(() => {
      let region = Object.keys(testData)[0];
      this.setState({
        theaterData: testData,
        region: region,
        theater: testData[region][0]
      });
    }, 2000);
  }

  selectRegion = event => {
    this.setState({
      region: event.target.value
    });
  };

  checkFile = async event => {
    const file = event.target.files[0];
    if (!file) return;
    const data = await new Response(file).text();
    console.log(data);
    // let files = event.target.files;

    // let output = null;
    // let reader = new FileReader();

    // // Closure to capture the file information.
    // reader.onload = e => {
    //   try {
    //     let data = JSON.parse(e.target.result);
    //     console.log("data:\n", data);
    //     output = data;
    //   } catch (ex) {
    //     alert("정상적인 json 파일이 아닙니다!");
    //     console.log(ex);
    //   }
    // };
    // reader.readAsText(files[0]);

    // console.log("output is: ", output);
  };

  submitAction = async event => {
    event.preventDefault();

    const file = document.getElementById("timeTableFile").files[0];
    if (!file) return;
    const uploadedData = await new Response(file).text();

    let data = {
      region: this.state.region,
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
    if (this.state.theaterData === null) {
      return "영화관 정보를 로딩중입니다.";
    } else {
      return (
        <form onSubmit={this.submitAction}>
          <select name="region" onChange={this.selectRegion}>
            <option value="default" disabled>
              지역
            </option>
            {Object.keys(this.state.theaterData).map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
          <select name="region">
            <option value="default" disabled>
              영화관
            </option>
            {this.state.theaterData[this.state.region].map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="file"
            id="timeTableFile"
            name="timeTableFile"
            accept=".json"
            onChange={this.checkFile}
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
