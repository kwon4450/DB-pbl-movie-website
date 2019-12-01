import React, { Component } from "react";

import SignUp from "component/signup";
import ReviewData from "component/ReviewData";

class Join extends Component {
  render() {
    return <SignUp {...this.props}></SignUp>;
  }
}

export default Join;
