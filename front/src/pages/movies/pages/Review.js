import React, { Component } from "react";
import ReviewWrite from "component/review_under/reviewwrite";
import ReviewData from "component/review_under/reviewdata";
import Slideshow2 from "practice/Slide2";
import "component/review_under/style/review.css";

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
        <Slideshow2></Slideshow2>
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
