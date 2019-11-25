import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Auth, Test } from 'pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path='/test' component={Test}/>
        <Route exact path='/auth' component={Auth}/>
      </BrowserRouter>
    );
  }
}

export default App;
