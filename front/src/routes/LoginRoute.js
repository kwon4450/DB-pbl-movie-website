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
    redirectTo: "/login"
  };

  render() {
    const {
      isAuthenticated,
      redirectTo,
      component: LoginComponent,
      isPublic,
      handleAuth,
      ...rest
    } = this.props;
    if (isAuthenticated) {
      alert("로그인이 필요한 페이지입니다.");
      return <Route {...rest} render={() => <Redirect to={redirectTo} />} />;
    } else
      return (
        <Route
          {...rest}
          render={props => (
            <LoginComponent
              handleAuth={handleAuth}
              isAuthenticated={isAuthenticated}
            />
          )}
        />
      );
  }
}

export default LoginRoute;
