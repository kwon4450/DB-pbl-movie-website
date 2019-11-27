import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Auth, Join } from 'pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path='/login' component={Auth} />
        <Route exact path='/join' component={Join} />
      </BrowserRouter>
    );
  }
}

export default App;
