import React, { Component } from 'react';

import ScreenMap from './screenMap';

class SelectSeat extends Component{
  render() {
    return(
      <section className='SelectSeat'>
        <header>인원/좌석</header>
        <section className='numOfPeople'></section>
        <section className='screenInfo'></section>
        <ScreenMap></ScreenMap>
        <nav className='ticketingStatus'></nav>
      </section>
    );
  }
}

export default SelectSeat;