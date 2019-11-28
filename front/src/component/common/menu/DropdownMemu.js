import React, { Component } from "react";

import "./style/dropdownMenu.css";
import Menu from "./Menu";

class DropdownMenu extends Component {
  render() {
    return (
      <div
        className={
          "Dropdown" +
          (this.props.className !== undefined ? " " + this.props.className : "")
        }
      >
        <div className="btn">
          <span>{this.props.title}</span>
        </div>
        <Menu className="content">{this.props.children}</Menu>
      </div>
    );
  }
}

export default DropdownMenu;
