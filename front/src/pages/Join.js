import React, { Component } from 'react';

import PageTamplate from 'component/template/PageTemplate.js';
import SignUp from 'component/signup';

class Join extends Component {
  render() {
    return (
      <SignUp {...this.props}></SignUp>
    );
  }
}

export default Join;