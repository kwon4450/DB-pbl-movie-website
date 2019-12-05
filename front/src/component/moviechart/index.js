import React, { Component } from "react";
import "./style/moviechart.css";

class MovieChart extends Component {
  render() {
    return (
      <div className="MovieChart">
        <div className="num">No.{this.props.num}</div>
        <div className="img">
          <img
            className="logo"
            {...this.props.img}
            alt={this.props.title + " poster"}
            title={this.props.title}
            width="280px"
            height="350px"
          ></img>
        </div>
        <div className="title">{this.props.title}</div>
        <div className="releasedate">{this.props.releasedate} 개봉</div>
        <div className="rate">{this.props.rate}%</div>
        <div className="ticket">예매</div>
      </div>
    );
  }
}

export default MovieChart;
