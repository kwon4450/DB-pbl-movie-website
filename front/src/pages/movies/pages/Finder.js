import React, { Component } from "react";
import Detailpage from 'component/moviechart/Detailpage'
class Finder extends Component {
  render() {
    return <div>
      <h2>영화 상세 페이지</h2>
      <br></br>
      <hr/>
      <Detailpage></Detailpage>
      {/* 임시로 이페이지에다가 해놈 */}
    </div>;
  }
}

export default Finder;
