import React, { Component } from "react";

class Moviedetail extends Component {
  render() {
    return (
      <div className="MovieDetail">
        <div className="title2">{this.props.title}</div>
        <div className="screening">{this.props.screening}</div>
        <div className="img2">
          <img
            className="logo"
            {...this.props.img}
            alt={this.props.title + " poster"}
            title={this.props.title}
            width="280px"
            height="300px"
          ></img>
        </div>
        <div className="releasedate">{this.props.releasedate} 개봉</div>
        <div className="rating">예매율   {this.props.rate} %</div>
        <div className="pd">감독: {this.props.pd}</div>
        <div className="actor">배우: {this.props.actor}</div>
        <div className="genre">장르: {this.props.genre}</div>
        <div className="ticket2">예매</div>
      </div>
    );
  }
}

export default Moviedetail;
