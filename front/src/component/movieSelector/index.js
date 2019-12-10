import React, { Component } from "react";

class MovieSelector extends Component {
  submitAction(e) {
    e.preventDefa;
  }
  render() {
    return <form onSubmit={this.submitAction}></form>;
  }
}

export default MovieSelector;
