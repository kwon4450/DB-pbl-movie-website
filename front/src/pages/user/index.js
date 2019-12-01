import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import pages from "./pages";

class User extends Component {
  render() {
    return (
      <Fragment>
        {pages.map((item, index) => {
          return (
            <Route
              {...{ ...item, path: this.props.computedMatch.path + item.path }}
              key={index}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default User;
