import React, { Component } from "react";
import axios from "axios";

class TheaterUpload extends Component {
  constructor(props) {
    super(props);
  }

  submitAction = async event => {
    event.preventDefault();

    const file = document.getElementById("movieFile").files[0];
    if (!file) return;
    const uploadedData = await new Response(file).text();

    let data = {
      json: uploadedData
    };
    axios
      .post("/api/admin/upload/movie", { data })
      .then(res => {
        alert(res.data.info);
      })
      .catch(err => {
        console.log(err);
        alert("에러 발생");
      });
  };

  render() {
    return (
      <div>
        <h2>MovieUpload</h2>
        <form onSubmit={this.submitAction}>
          <input
            type="file"
            id="movieFile"
            name="movieFile"
            accept=".json"
            required
          ></input>
          <button type="submit" className="submitBtn">
            업로드
          </button>
        </form>
      </div>
    );
  }
}

export default TheaterUpload;
