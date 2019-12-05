import React, { Component } from "react";
//import "./style/moviechart.css";
import Moviedetail from "./moviedetail";

class MovieDetailPage extends Component {
  Detail = [
    {
      title: "겨울왕국",
      screening: "4DX 2D",
      releasedate: "2019.11.18",
      rate: "81.2%",
      pd: "이정인",
      actor: "권범수",
      genre: "Animation"
    },
    {
      title: "겨울왕국",
      screening: "2D",
      releasedate: "2019.11.18",
      rate: "81.2%",
      pd: "이정인",
      actor: "권범수",
      genre: "Animation"
    }
  ];

  render() {
    return (
      <div className="Movie">
        {this.Detail.slice(0, 2).map((Detail, index) => {
          return <Moviedetail {...Detail} key={index}></Moviedetail>;
        })}
      </div>
    );
  }
}

export default MovieDetailPage;
