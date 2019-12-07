import React, { Component } from "react";
import "./style/moviedetail.css";

class Moviedetail extends Component {
  render() {
    return (
      <div className="Moviedetail">
        <h2>영화 상세페이지</h2>
        <hr></hr>
        <div className="img2">
          <img
            className="logo"
            {...this.props.data.img2}
            alt={this.props.data.title2 + "poster"}
            title2={this.props.data.title2}
            width="280px"
            height="300px"
          ></img>
        </div>
        <div class="detail">
        <div className="title2">{this.props.data.title2}</div>
          <ul>
          <div className="releasedate">{this.props.data.releasedate} 개봉</div>
        <div className="rating">예매율 {this.props.data.rating} %</div>
        <div className="screening">타입: {this.props.data.screening}</div>
        </ul>
        <div className="pd">감독: {this.props.data.pd}</div>
        <div className="grade">등급: {this.props.data.grade}</div>
        <div className="actor">배우: {this.props.data.actor}</div>
        <div className="genre">장르: {this.props.data.genre}</div>
        <div className="ticket2"></div>
        </div>
      </div>
    );
  }
}

export default Moviedetail;
