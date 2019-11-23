import React, { Component } from 'react';

class moviechart extends Component{

  render() {
    return(
      <div className='Moviechart'>
        <div class='num'>No.{this.props.num}</div>
        <div class='image'>{this.props.image}</div>
        <div class='title'>{this.props.title}</div>
        <div class='rate'>{this.props.rate}%</div>
        <div class='releasedate'>{this.props.releasedate}개봉</div>
        <div class='ticket'>예매</div>
      </div>
    );
  }
}

export default moviechart;