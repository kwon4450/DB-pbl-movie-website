import React, { Component } from 'react';

import PageTemplate from 'component/template/PageTemplate.js';
import TimeTable from 'component/timeTable';
import SelectSeat from '../component/selectSeat';
import MovieChart from '../component/moviechart';

class Home extends Component {
  render() {
    return (
      <PageTemplate className='Home'>
        {/* <MovieChart></MovieChart> */}
        <SelectSeat></SelectSeat>
      </PageTemplate>
    );
  }
}

export default Home;
