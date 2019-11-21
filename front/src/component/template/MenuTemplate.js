import React, { Component } from 'react';

class MenuTemplate extends Component {
  static defaultProps = {
    className: "",
    items: [],
    itemOnClickFunc: () => {}
  }
  render() {
    return (
      <div className={'Menu '+this.props.className}>
        {
          this.props.items.map((itemInfo, index) => {
            return (
              <div className={'Item '+(itemInfo.className!==undefined?itemInfo.className:itemInfo.name)}
                key={index}
                onClick={() => this.props.itemOnClickFunc(index)}>
                <this.props.itemComponent {...itemInfo}>
                </this.props.itemComponent>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default MenuTemplate;