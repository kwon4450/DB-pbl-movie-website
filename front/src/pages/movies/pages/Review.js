import React, { Component } from "react";
import ReviewWrite from "component/review_under/reviewwrite";
import "component/review_under/style/review.css";
import InputReview from "../../../component/review_under/inputreview";

class Review extends Component {
  ReviewData = [
    {
      nickname: "정인",
      reviews:
        "겨울왕국2는 전편보다 훨씬 더 스토리가 감동적이였고 개인적으로 엘사가 아닌 울라프가 주인공인 것 같네요 !!",
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
      nickname: "냐냐냐옹",
      reviews: "브루니, 게일, 물과 땅의 정령 그리고 엘사의 마법 그 자체..",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "귀염둥이1004",
      reviews: "넘 재밌게 잘봤습니다.^^",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "밍누",
      reviews:
        "동생 보여주려고 간거라 기대안하고 봤는데 진짜 재밌네요 제가 더 재밌게본듯 ㅜ",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "범수",
      reviews: "여자친구랑 간단히 보기 재밌었어요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "재훈이",
      reviews: "정말 최고였어요 꼭보세요",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "노래조아",
      reviews: "좋아요 그리고 노래도 너무 좋아요 ~^^",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "이지은",
      reviews: "재밌었어요~ 4DX로 보니까 더 좋네요 ㅎㅎ",
      usergrade: "VIP",
      data: "2019.12.12"
    },
    {
      nickname: "홍디",
      reviews: "한 번 더보려구요 영상 그래픽부터 색감 스토리까지 다좋았어요",
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
