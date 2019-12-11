import React, { Component } from "react";
import Moviedetail from "component/movieDetail";

class Detail extends Component {
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <Moviedetail {...this.props} />
      </div>
    );
  }
}

export default Detail;
