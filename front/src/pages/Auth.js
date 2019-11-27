import React, { Component } from 'react';

import LogIn from 'component/login';

class Auth extends Component {
  render() {
    return (
      <LogIn {...this.props} ></LogIn>
    );
  }
}

export default Auth;