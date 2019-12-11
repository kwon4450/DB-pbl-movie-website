import React, { Component } from "react";
import "./style/moviechart.css";
import { Link } from "react-router-dom";

class MovieChart extends Component {
  render() {
    let movie = this.props.movie;
    console.log(this.props);
    return (
      <div className="MovieChart">
        <div className="num">No.{this.props.num}</div>
        <div className="img">
          <Link
            to={{
              pathname: `/movies/detail/${movie.movietitle}`,
              state: {
                movie: movie
              }
            }}
          >
            <img
              className="logo"
              alt={movie.movietitle + " poster"}
              title={movie.movietitle}
              width="280px"
              height="300px"
            ></img>
          </Link>
        </div>
        <Link to="/">
          <div className="title">{movie.movietitle}</div>
        </Link>
        <div className="releasedate">{movie.releasedate} 개봉</div>
        {/* 예매율 */}
        <div className="rate">{movie.rating}%</div>
        <div className="ticket">예매</div>
      </div>
    );
  }
}

export default MovieChart;
