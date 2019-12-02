import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { PageRoutes } from "routes";

import Header from "component/common/header";
import Footer from "component/common/footer";
import pages from "pages";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: this.props.cookies.get("connect.sid") ? true : false
    };
  }

  handleAuth(value) {
    this.setState({
      isAuthenticated: value
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <PageRoutes
              isAuthenticated={this.state.isAuthenticated}
              parentPath={""}
              handleAuth={this.handleAuth}
              pages={pages}
            />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default withCookies(App);
