import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Auth } from 'pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path='/test' component={Auth}/>
      </BrowserRouter>
    );
  }
}

export default App;
