import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Link to='/test'>TEst</Link>
      </div>
    );
  }
}

export default Home;
