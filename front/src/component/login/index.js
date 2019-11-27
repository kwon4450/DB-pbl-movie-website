import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style/LogIn.css';
import axios from 'axios';

class LogIn extends Component {
  state = {
    id: '',
    password: ''
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitAction = event => {
    event.preventDefault();
    var user = this.state;
    axios.post('http://localhost:8008/api/user/login', { id: user.id, password: user.password }, { withCredentials: true })
      .then(res => {
        console.log(res.headers);
        switch(res.status) {
          case 200:
            this.props.history.push('/');
            break;
          case 401:
            alert(res.reason);
        }
      })
  }

  render() {
    return (
      <section className="login">
        <h2>로그인</h2>
        <form onSubmit={this.submitAction}>
          <ul>
            <li><input type="text" name="id" placeholder="아이디" onChange={this.onChange} /></li>
            <li><input type="password" name="password" placeholder="비밀번호" onChange={this.onChange} /></li>
            <li><button type="submit">로그인</button></li>
          </ul>
        </form>
        <div>
          <ul>
            <li><Link to="">아이디 찾기</Link></li>
            <li><Link to="">비밀번호 찾기</Link></li>
            <li><Link to="/join">회원가입</Link></li>
          </ul>
        </div>
      </section>
    )
  }
}

export default LogIn;