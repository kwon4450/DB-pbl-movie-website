import React, { Component } from "react";
import "./style/moviechart.css";

class MovieChart extends Component {
  render() {
    return (
      <div className="MovieChart">
        <div class="num">{this.props.num}</div>
        <div class="image"></div>
        <div class="title">{this.props.title}</div>
        <div class="releasedate">{this.props.releasedate} 개봉</div>
        <div class="rate">{this.props.rate}%</div>
        <div class="ticket">예매</div>
      </div>
    );
  }
}

export default MovieChart;
