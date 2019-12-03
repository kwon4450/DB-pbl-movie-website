import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { PageRoutes } from "routes";
import axios from "axios";

import Header from "component/common/header";
import Footer from "component/common/footer";
import pages from "pages";
import RouterContainer from "./routes/RouterContainer";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);

    axios
      .get("/api/user/loginCheck")
      .then(res => {
        console.log("session check success\n", res.data);
        this.handleAuth(res.data.auth);
      })
      .catch(err => {
        console.log("session check fail", err);
      });

    this.state = {
      isAuthenticated: this.props.cookies.get("connect.sid") ? true : false
    };
  }

  handleAuth = value => {
    this.setState({
      isAuthenticated: value
    });
  };

  render() {
    return (
      <BrowserRouter>
        <RouterContainer handleAuth={this.handleAuth}>
          <Header
            isAuthenticated={this.state.isAuthenticated}
            handleAuth={this.handleAuth}
            userID={this.props.cookies.get("userID")}
          />
          <main>
            <Switch>
              <PageRoutes
                isAuthenticated={this.state.isAuthenticated}
                handleAuth={this.handleAuth}
                parentPath={""}
                pages={pages}
              />
            </Switch>
          </main>
          <Footer />
        </RouterContainer>
      </BrowserRouter>
    );
  }
}

export default withCookies(App);
