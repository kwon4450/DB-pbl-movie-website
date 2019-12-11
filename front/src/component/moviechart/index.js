import React, { Component } from "react";
import "./style/moviechart.css";
import { Link } from "react-router-dom";

class MovieChart extends Component {
  render() {
    return (
      <div className="MovieChart">
        <div className="num">No.{this.props.num}</div>
        <div className="img">
          <Link to="">
            <img
              className="logo"
              {...this.props.img}
              alt={this.props.title + " poster"}
              title={this.props.title}
              width="280px"
              height="300px"
            ></img>
          </Link>
        </div>
        <Link to="">
          <div className="title">{this.props.title}</div>
        </Link>
        <div className="releasedate">{this.props.releasedate} 개봉</div>
        <div className="rate">{this.props.rate}%</div>
        <div className="ticket">예매</div>
      </div>
    );
  }
}

export default MovieChart;
