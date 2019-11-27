import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'component/header';
import Footer from 'component/footer';
import pages from 'pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <main>
          <Switch>
            {pages.map((item, index) => (<Route {...item} key={index}></Route>))}
          </Switch>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
