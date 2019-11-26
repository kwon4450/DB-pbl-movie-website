import React, { Component } from 'react';

import 'style/menu.css';
class MenuItem extends Component{
  render() {
    return(
      <div className='item'>
        {this.props.children}
      </div>
    );
  }
}

class Menu extends Component{
  render() {
    return(
      <div className={'Menu'+(this.props.className!==undefined?' '+this.props.className:'')}>
        {this.props.children.map((item, index) => (<div className='MenuItem' key={index}>{item}</div>))}
      </div>
    );
  }
}

export {Menu as default, MenuItem};