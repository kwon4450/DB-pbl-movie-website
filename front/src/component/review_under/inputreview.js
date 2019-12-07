import React, { Component } from "react";
import "./style/review.css";

class InputReview extends Component {
  render() {
    return (
      <div className="input">
        <div classname="inputreview">
          <h2 classname="h2name">평점 작성</h2>
          <strong id="겨울왕국 2"></strong>
          <div class="textbox">
            <textarea
              name="input"
              cols="70"
              rows="2"
              maxlength="280"
              placeholder="강민우 권범수 이정인 김재훈 윤병서 강민우 권범수 이정인 김재훈 윤병서"
            ></textarea>
          </div>
          <button submit={this.handleIncrease}>작성완료</button>
        </div>
      </div>
    );
  }
}

export default InputReview;
