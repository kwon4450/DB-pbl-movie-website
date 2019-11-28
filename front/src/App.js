import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { LoginRoute, LogoutRoute } from "routes";

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
        <Header></Header>
        <main>
          <Switch>
            {pages.map((item, index) => {
              if (item.isPublic) {
                return (
                  <LoginRoute
                    isAuthenticated={this.state.isAuthenticated}
                    {...item}
                    key={index}
                  />
                );
              } else {
                return <Route {...item} key={index} />;
              }
            })}
          </Switch>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default withCookies(App);
