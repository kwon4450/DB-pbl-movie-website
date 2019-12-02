import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

class LoginRoute extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    redirectTo: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  static defaultProps = {
    isAuthenticated: false,
    redirectTo: "/user/login"
  };

  render() {
    const rest = { exact: this.props.exact, path: this.props.path };
    console.log("in LoginRoute:\n", rest);
    if (!this.props.isAuthenticated) {
      return (
        <Route
          {...rest}
          render={() => {
            alert("로그인이 필요한 페이지입니다.");
            return <Redirect to={this.props.redirectTo} />;
          }}
        />
      );
    } else
      return (
        <Route
          {...rest}
          render={props => (
            <this.props.LoginComponent
              handleAuth={this.props.handleAuth}
              isAuthenticated={this.props.isAuthenticated}
            />
          )}
        />
      );
  }
}

export default LoginRoute;
