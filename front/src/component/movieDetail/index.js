import React, { Component } from "react";
import "./style/moviedetail.css";
import axios from "axios";

class Moviedetail extends Component {
  componentDidMount() {
    axios.get();
  }
  render() {
    let movie = this.props.location.state.movie;
    return (
      <div className="Moviedetail">
        <h2 className="detpage">영화 상세페이지</h2>
        <hr></hr>
        <div className="img2">
          <img
            className="logo"
            alt={`${movie.movietitle} poster`}
            title={movie.movietitle}
            width="280px"
            height="300px"
          ></img>
        </div>
        <div class="detail">
          <ul class="data">
            <div className="title2">{movie.movietitle}</div>
          </ul>
          <ul class="data">
            <li class="part">
              <div className="releasedate">
                <span class="detailed">개봉 일자:</span> {movie.releasedate}
              </div>
            </li>
            <li class="part">
              <div className="rating">
                <span class="detailed">예매율: </span> {movie.rating} %
              </div>
            </li>
          </ul>
          <ul class="data">
            <li class="part">
              <div className="grade">
                <span class="detailed">등급: </span> {movie.grade}
              </div>
            </li>
            <li class="part">
              <div className="runningttime">
                <span class="detailed">상영시간: </span> {movie.runningtime}
              </div>
            </li>
          </ul>

          <ul class="data">
            <li class="part">
              <div className="pd">
                <span class="detailed">감독: </span>
                {movie.director}
              </div>
            </li>
            <li class="part">
              <div className="actor">
                <span class="detailed">배우: </span>
                {movie.actor}
              </div>
            </li>
          </ul>
          <br></br>
          <ul class="data">
            <div className="story">
              <h4>시놉시스</h4>
              {movie.story}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Moviedetail;
