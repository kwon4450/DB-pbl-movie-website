import React, { Component } from 'react';

import PageTamplate from 'component/template/PageTemplate.js';
import TimeTable from 'component/timeTable';

class Home extends Component {
  render() {
    return (
      <PageTamplate className='Home'>
        <TimeTable></TimeTable>
      </PageTamplate>
    );
  }
}

export default Home;