import React, { Component } from "react";

class Isgood extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  render() {
    return (
      <div>
        <div>good: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}

export default Isgood;
