import React, { Component } from "react";
import Review from "./reviewwrite.js";

class ReviewData extends Component {
  ReviewData = [
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    }
  ];
  render() {
    return (
      <div className="Reviewdata">
        <Review data={ReviewData}></Review>
      </div>
    );
  }
}

export default ReviewData;
