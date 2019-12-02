import React, { Component } from "react";
import Isgood from "./isgood";

class ReviewWrite extends Component {
  render() {
    return (
      <div classname="Review">
        <div classname="nickname">{this.props.nickname}</div>
        <div classname="reviews">{this.props.reviews}</div>
        <br></br>
        <br></br>
        <div classname="grade">{this.props.grade}</div>
        <div classname="date">{this.props.date}</div>
        <Isgood></Isgood>
      </div>
    );
  }
}

export default ReviewWrite;
