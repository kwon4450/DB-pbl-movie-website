import React, { Component } from 'react';

import SelectSeat from '../component/selectSeat';

class Ticketing extends Component {
  render() {
    console.log("page component's props\n",this.props);
    return (
      <div className='Ticketing'>
        <SelectSeat {...this.props}></SelectSeat>
      </div>
    );
  }
}

export default Ticketing;
