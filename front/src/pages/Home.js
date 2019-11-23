import React, { Component } from 'react';

import PageTamplate from 'component/template/PageTemplate.js';
// import TimeTable from 'component/timeTable';
import SelectSeat from '../component/selectSeat';

class Home extends Component {
  render() {
    return (
      <PageTamplate className='Home'>
        {/* <TimeTable></TimeTable> */}
        <SelectSeat></SelectSeat>
      </PageTamplate>
    );
  }
}

export default Home;
