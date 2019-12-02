import React, { Component } from "react";
import { PageRoutes } from "routes";

import pages from "./pages";

class Ticketing extends Component {
  render() {
    return (
      <PageRoutes
        isAuthenticated={this.props.isAuthenticated}
        parentPath={this.props.match.path}
        handleAuth={this.props.handleAuth}
        pages={pages}
      />
    );
  }
}

export default Ticketing;
