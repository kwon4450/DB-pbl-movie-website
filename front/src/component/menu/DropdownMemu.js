import React, { Component } from 'react';

import './style/dropdownMenu.css';
import Menu, { MenuItem } from './Menu';

class DropdownMenu extends Component{
  render() {
    console.log(this.props.children);
    return(
      <div className={'Dropdown'+(this.props.className!==undefined?' '+this.props.className:'')}>
        <div className='btn'><span>{this.props.title}</span></div>
        <Menu className='content'>
          {this.props.children.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default DropdownMenu;