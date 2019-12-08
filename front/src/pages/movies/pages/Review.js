import React, { Component } from "react";
import ReviewWrite from "component/review_under/reviewwrite";
import "component/review_under/style/review.css";
import InputReview from "../../../component/review_under/inputreview";

class Review extends Component {
  ReviewData = [
    {
      nickname: "병서",
      reviews: "겨울왕국2는 전편보다 훨씬 더 스토리가 감동적이였고 개인적으로 엘사가 아닌 울라프가 주인공인 것 같네요 !!",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "병서",
      reviews: "정말 재미있어요",
      usergrade: "VIP",
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
