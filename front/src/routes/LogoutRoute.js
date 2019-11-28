import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Todo: LoginRoute와 동일하게 형식 맞추기
 */

class LogoutRoute extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    redirectTo: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  static defaultProps = {
    isAuthenticated: false,
    redirectTo: "/"
  };

  renderContent() {
    const {
      isAuthenticated,
      redirectTo,
      component: LogoutComponent,
      ...rest
    } = this.props;
    if (isAuthenticated) return <LogoutComponent {...rest} />;
    else {
      alert("이미 로그인이 되어있습니다.");
      return <Redirect to={redirectTo} />;
    }
  }

  render() {
    return this.renderContent();
  }
}

export default LogoutRoute;
