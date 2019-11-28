import React, { Component } from "react";
import TheaterSelector from "component/theaterSelector";

class Theater extends Component {
  render() {
    return (
      <div className="Theater">
        <TheaterSelector></TheaterSelector>
      </div>
    );
  }
}

export default Theater;
