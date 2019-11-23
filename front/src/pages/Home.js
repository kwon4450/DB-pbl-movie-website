import React, { Component } from 'react';

import PageTamplate from 'component/template/PageTemplate.js';
import TimeTable from 'component/timeTable';
import MovieChart from 'component/moviechart';

class Home extends Component {
  render() {
    return (
      <PageTamplate className='Home'>
        <MovieChart></MovieChart>
      </PageTamplate>
    );
  }
}

export default Home;