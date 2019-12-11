import React, { Component } from "react";
import Moviedetail from "component/movieDetail";

class Detail extends Component {
  render() {
    return (
      <div>
        <Moviedetail {...this.props} />
      </div>
    );
  }
}

export default Detail;
