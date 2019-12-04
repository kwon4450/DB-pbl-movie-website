import React, { Component } from "react";
import Isgood from "./isgood";

class ReviewWrite extends Component {
  render() {
    return (
      <div className="Review">
        <div className="nickname">{this.props.nickname}</div>
        <div className="reviews">{this.props.reviews}</div>
        <br></br>
        <br></br>
        <div className="grade">{this.props.grade}</div>
        <div className="date">{this.props.date}</div>
        <Isgood></Isgood>
      </div>
    );
  }
}

export default ReviewWrite;
