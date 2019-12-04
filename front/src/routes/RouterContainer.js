import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class RouterContainer extends Component {
  componentDidMount() {
    this.props.history.listen((location, action) => {
      axios
        .get("/api/user/loginCheck")
        .then(res => {
          console.log("session check success\n", res.data);
          this.props.handleAuth(res.data.auth);
        })
        .catch(err => {
          console.log("session check fail", err);
        });
      console.log(action, location.pathname);
    });
  }
  render() {
    // console.log(this.props);

    return this.props.children;
  }
}

export default withRouter(RouterContainer);
