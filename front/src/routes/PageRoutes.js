import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { LoginRoute } from "routes";

class PageRoutes extends Component {
  static propTypes = {
    pages: PropTypes.array,
    isAuthenticated: PropTypes.bool,
    handleAuth: PropTypes.func
  };

  render() {
    return (
      <>
        {this.props.pages.map((item, index) => {
          const { isPublic, component: RenderedComponent, exact, path } = item;

          if (!isPublic) {
            return (
              <LoginRoute
                exact={exact}
                path={this.props.parentPath + path}
                component={RenderedComponent}
                isAuthenticated={this.props.isAuthenticated}
                handleAuth={this.props.handleAuth}
                key={index}
              />
            );
          } else {
            return (
              <Route
                exact={exact}
                path={this.props.parentPath + path}
                key={index}
                render={props => (
                  <RenderedComponent
                    {...props}
                    isAuthenticated={this.props.isAuthenticated}
                    handleAuth={this.props.handleAuth}
                  />
                )}
              />
            );
          }
        })}
      </>
    );
  }
}

export default PageRoutes;
