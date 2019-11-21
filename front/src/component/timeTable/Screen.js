import React, { Component } from 'react';
import ScreenTimeTable from './ScreenTimeTable';

class Screen extends Component{
  render() {
    return(
      <div className='screen'>
        <div className='screenInfo'>
          <div className='type'>{this.props.type}</div>
          <div className='location'>{this.props.location.id}관 {this.props.location.floor}층</div>
          <div className='totalSeat'>{this.props.totalSeat}석</div>
        </div>
        <div className='times'>
          {this.props.timeTable.map((info, index) => {
            return(<ScreenTimeTable {...info} key={{index}}></ScreenTimeTable>);
          })}
        </div>
      </div>
    );
  }
}

export default Screen;