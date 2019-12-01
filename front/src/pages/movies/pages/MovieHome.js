import React, { Component } from "react";
import MovieChart from "component/moviechart";

class MovieHome extends Component {
  movieChartData = [
    {
      num: 1,
      img: {
        src: "assets/images/movies/1.jpg"
      },
      title: "Frozen2",
      rate: "93.2",
      releasedate: "2019.11.21"
    },

    {
      num: 2,
      img: {
        src: "assets/images/movies/find_me.jpg"
      },
      title: "나를 찾아줘",
      rate: "9.2",
      releasedate: "2019.11.27"
    },

    {
      num: 3,
      img: {
        src: "assets/images/movies/2.jpg"
      },
      title: "블랙머니",
      rate: "4.2",
      releasedate: "2019.11.13"
    },

    {
      num: 4,
      img: {
        src: "assets/images/movies/love_at.jpg"
      },
      title: "러브앳",
      rate: "2.8",
      releasedate: "2019.11.27"
    },

    {
      num: 5,
      img: {
        src: "assets/images/movies/4.jpg"
      },
      title: "82년생 김지영",
      rate: "1.4",
      releasedate: "2019.10.23"
    },

    {
      num: 6,
      img: {
        src: "assets/images/movies/5.jpg"
      },
      title: "윤희에게",
      rate: "0.9",
      releasedate: "2019.10.23"
    }
  ];
  render() {
    return (
      <div className="MovieHome">
        <h1>무비차트</h1>

        <div class="overall">
          <div class="inner_overall">
            {this.movieChartData.slice(0, 3).map((movieData, index) => {
              return <MovieChart {...movieData} key={index}></MovieChart>;
            })}
          </div>
        </div>

        <div class="overall">
          <div class="inner_overall">
            {this.movieChartData.slice(3, 6).map((movieData, index) => {
              return <MovieChart {...movieData} key={index}></MovieChart>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieHome;
