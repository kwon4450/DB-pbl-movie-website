import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from 'component/menu/DropdownMemu';
import Menu, { MenuItem } from 'component/menu/Menu';
import 'style/menu.css';
import 'style/header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='logo'>
          <Link to='/'><h1>DBV</h1></Link>
        </div>
        
        <Menu className='user-menu'>
          <MenuItem><Link to='/login'>로그인</Link></MenuItem>
          <MenuItem><Link to='/sign-up'>회원가입</Link></MenuItem>
        </Menu>

        <Menu className='nav-menu'>
          <DropdownMenu title='영화'>
            <Link to='/movies'>무비 차트</Link>
            <Link to='/movies/finder'>무비 파인더</Link>
          </DropdownMenu>

          <DropdownMenu title='예매'>
            <Link to='/ticketing/time-table'>상영 시간표</Link>
            <Link to='/ticketing/fast'>빠른 예매</Link>
          </DropdownMenu>

          <MenuItem>
            <Link to='/theater'>영화관</Link>
          </MenuItem>
        </Menu>
      </header>
    );
  }
}

export default Header;