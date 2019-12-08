import React, { Component } from "react";
import ReviewWrite from "component/review_under/reviewwrite";
import "component/review_under/style/review.css";
import InputReview from "../../../component/review_under/inputreview";

class Review extends Component {
  ReviewData = [
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      grade: "VIP",
      data: "2019.12.12"
    }
  ];
  render() {
    return (
      <div>
        <InputReview></InputReview>
        <br></br>
        <br></br>
        <div className="Reviews">
          {this.ReviewData.slice(0, 10).map((ReviewData, index) => {
            return <ReviewWrite {...ReviewData} key={index}></ReviewWrite>;
          })}
        </div>
      </div>
    );
  }
}

export default Review;
