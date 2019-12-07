import React, { Component } from "react";
import "./style/review.css";

class InputReview extends Component {
  render() {
    return (
      <div className="input">
        <div classname="inputreview">
          <h2 classname="h2name">평점 작성</h2>
          <h3>겨울 왕국2</h3>
          <div class="textbox">
            <textarea
              name="input"
              cols="70"
              rows="2"
              maxlength="280"
              placeholder="비방 및 욕설 시 사용이 정지될 수 있습니다."
            ></textarea>
            <br></br>
          </div>
          <button submit={this.handleIncrease}>작성완료</button>
        </div>
      </div>
    );
  }
}

export default InputReview;
