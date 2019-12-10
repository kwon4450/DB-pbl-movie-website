import React, { Component } from "react";
import Isgood from "./isgood";

class ReviewWrite extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Review">
        <div className="nickname">{this.props.nickname}</div>
        <div className="reviews">{this.props.reviews}</div>
        <br></br>
        <br></br>
        <div className="usergrade">{this.props.usergrade}</div>
        <div className="date">{this.props.date}</div>
        <Isgood></Isgood>
      </div>
    );
  }
}

export default ReviewWrite;
