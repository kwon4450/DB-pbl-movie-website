import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import DropdownMenu from "component/common/menu/DropdownMemu";
import Menu, { MenuItem } from "component/common/menu/Menu";
import "./style/header.css";

class Header extends Component {
  renderUserMenu() {
    if (this.props.isAuthenticated) {
      let logout = () => {
        axios
          .post("/api/user/logout")
          .then(res => {
            console.log("logout success!\n");
          })
          .catch(err => {
            console.log("logout fail!\n", err);
          });
        this.props.handleAuth(false);
      };

      return [
        <Link to={`/user/mypage/${this.props.userID}`} key="myPage">
          <MenuItem>{this.props.userID}</MenuItem>
        </Link>,
        <div key="logout" onClick={logout}>
          <MenuItem>로그아웃</MenuItem>
        </div>
      ];
    } else {
      return [
        <Link to="/user/login" key="login">
          <MenuItem>로그인</MenuItem>
        </Link>,
        <Link to="/user/join" key="join">
          <MenuItem>회원가입</MenuItem>
        </Link>
      ];
    }
  }

  render() {
    return (
      <header className="main_header">
        <nav className="user">
          <div className="logo">
            <Link to="/">
              <h1>DBV 영화관</h1>
            </Link>
          </div>

          <Menu className="user-menu">{this.renderUserMenu()}</Menu>
        </nav>

        <nav className="site">
          <Menu className="nav-menu">
            <Link exact="true" to="/movies">
              <MenuItem>무비 차트</MenuItem>
            </Link>
            {/* <DropdownMenu title="영화">
              <Link to="/movies/finder">
                <MenuItem>무비 파인더</MenuItem>
              </Link>
              <Link to="/movies/review">
                <MenuItem>리뷰/평점</MenuItem>
              </Link>
            </DropdownMenu> */}

            <Link to="/ticketing/timetable">
              <MenuItem>상영 시간표</MenuItem>
            </Link>
            {/* <DropdownMenu title="예매">
              <Link to="/ticketing/fast">
                <MenuItem>빠른 예매</MenuItem>
              </Link>
            </DropdownMenu> */}

            <Link to="/theater">
              <MenuItem>영화관</MenuItem>
            </Link>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default Header;
