import React, { Component } from "react";
import "./style/moviedetail.css";

class Moviedetail extends Component {
  render() {
    return (
      <div className="Moviedetail">
        <h2>영화 상세페이지</h2>
        <hr></hr>
        <div className="title2">
         {this.props.data.title2}
        </div>
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
        <div className="screening">{this.props.data.screening}</div>
        <div className="releasedate">{this.props.data.releasedate} 개봉</div>
        <div className="rating">예매율 {this.props.data.rating} %</div>
        <div className="pd">감독: {this.props.data.pd}</div>
        <div className="actor">배우: {this.props.data.actor}</div>
        <div className="genre">장르: {this.props.data.genre}</div>
        <div className="ticket2">예매</div>
      </div>
    );
  }
}

export default Moviedetail;
