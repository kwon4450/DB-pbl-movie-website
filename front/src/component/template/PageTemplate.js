import React, { Component, Fragment } from 'react';
import Header from 'component/header';
import Footer from 'component/footer';
import ErrorContent from 'component/common/ErrorContent.js';

class PageTemplate extends Component {
  render() {
    return (
    <Fragment>
      <Header></Header>
      <main className={this.props.className}>
        {
          this.props.children === undefined
          ? (<ErrorContent></ErrorContent>)
          : this.props.children
        }
      </main>
      <Footer></Footer>
    </Fragment>
    );
  }
}

export default PageTemplate;