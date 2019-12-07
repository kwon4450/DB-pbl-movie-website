import React, { Component } from "react";

import Moviedetail from "./component/movieDetail";

class Detail extends Component {
  movieInfo = [
    {
      title2: "겨울왕국2",
      img2: {
        src: "assets/images/movies/1.jpg"
      },
      screening: "4DX 2D",
      releasedate: "2019.11.18",
      rating: "81.2",
      pd: "이정인",
      actor: "권범수",
      genre: "Animation"
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
