import React, { Component } from "react";
import Moviedetail from "component/movieDetail";

class Detail extends Component {
  movieInfo = [
    {
      title2: "겨울왕국2",
      img2: {
        src: "/assets/images/movies/1.jpg"
      },
      screening: "4DX 2D",
      releasedate: "2019.11.18",
      rating: "81.2",
      grade:"[국내] 전체관람가",
      pd: "이정인",
      actor: "권범수,강민우,윤병서,김재훈",
      genre: "Animation (미국)",
      story: "평화로운 아렌델 왕국을 위협한다. 범수 엘사는 민우 훈련병 덕분에 구조된다."
    }
  ];
  render() {
    console.log(this.movieInfo[0]);
    return (
      <div>
        <Moviedetail data={this.movieInfo[0]}></Moviedetail>
      </div>
    );
  }
}

export default Detail;
