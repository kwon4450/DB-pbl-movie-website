import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { LoginRoute } from "routes";

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
          {pages.map((item, index) => {
            const {
              isPublic,
              component: RenderedComponent,
              ...routeInfo
            } = item;

            if (!isPublic) {
              return (
                <LoginRoute
                  {...routeInfo}
                  component={RenderedComponent}
                  isAuthenticated={this.state.isAuthenticated}
                  handleAuth={this.handleAuth}
                  key={index}
                />
              );
            } else {
              return (
                <Route
                  {...routeInfo}
                  key={index}
                  render={props => (
                    <RenderedComponent
                      {...props}
                      handleAuth={this.handleAuth}
                    />
                  )}
                />
              );
            }
          })}
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default withCookies(App);
