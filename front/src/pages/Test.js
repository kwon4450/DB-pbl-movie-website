import React, { Component } from 'react';

import PageTemplate from 'component/template/PageTemplate.js';

class Test extends Component{
  render() {
    return(
      <PageTemplate className="Test">
        <p>this is Test page!</p>
      </PageTemplate>
    );
  }
}

export default Test;