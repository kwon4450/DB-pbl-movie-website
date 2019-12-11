import React, { Component } from "react";
import "./style/review.css";

class InputReview extends Component {
  state = {
    rating: 5
  };

  handleRating = rate => {
    this.setState({ rating: rate });
  };

  render() {
    console.log(this.state.rating);
    return (
      <div className="input">
        <div classname="inputreview">
          <h2 classname="h2name">평점 및 리뷰 작성</h2>
          <h3>겨울 왕국2</h3>
          <div className="nowrap">
            <div className="clipped">
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <img
                    src={`http://gahyun.wooga.kr/main/img/testImg/star${
                      this.state.rating >= item ? "_on" : ""
                    }.png`}
                    onClick={() => this.handleRating(item)}
                  ></img>
                );
              })}
            </div>
          </div>
          <div class="textbox">
            <textarea
              name="input"
              cols="70"
              rows="4"
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
