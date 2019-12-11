import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminHome extends Component {
  render() {
    return (
    <div>
      <button>
        <Link to="/admin/theater">영화관 정보 업로드 페이지</Link>
      </button>
      <button>
        <Link to="/admin/timetable">상영 시간표 정보 업로드 페이지</Link>
      </button>
      <button>
        <Link to="/admin/movie">영화 정보 업로드 페이지</Link>
      </button>
    </div>);
  }
}

export default AdminHome;
