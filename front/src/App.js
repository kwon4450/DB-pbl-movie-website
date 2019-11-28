import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { LoginRouter, LogoutRouter } from 'routes'

import Header from 'component/header';
import Footer from 'component/footer';
import pages from 'pages';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated : (this.props.cookies.get('connect.sid') ? true : false)
    }
  }

  handleAuth(value) {
    this.setState({
      isAuthenticated: value
    })
  }

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

export default withCookies(App);
