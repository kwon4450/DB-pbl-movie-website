import React, { Component } from 'react';
import axios from 'axios'; // 이은지 최고

class SignUp extends Component {
  state = {
    id: '',
    idInfo: '',
    password: '',
    passwordCheck: '',
    passwordInfo: '',
    gender: '',
    mail: '',
    f_name: '',
    l_name: ''
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  idCheck = event => {
    axios.get(`http://localhost:8008/api/test/idCheck?id=${event.target.value}`)
      .then(res => {
      console.log(res);
      this.setState({ idInfo: res.data.info });
    })
  }

  passwordCheck = event => {
    if (this.state.password === this.state.passwordCheck) this.setState({ passwordInfo: "비밀번호가 일치합니다." });
    else this.setState({ passwordInfo: "비밀번호가 일치하지 않습니다." });
  }

  submitAction = event => {
    event.preventDefault();

    const user = this.state;
    console.log(user);

    axios.post('http://localhost:8008/api/test/signup', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <form onSubmit={this.submitAction}>
        <label>
          아이디 
          <input type="text" name='id' onChange={this.onChange} onBlur={this.idCheck}/>
          {this.state.idInfo}
        </label>
        <label>
          비밀번호
          <input type="password" name='password' onChange={this.onChange} />
        </label>
        <label>
          비밀번호 확인
          <input type="password" name='passwordCheck' onChange={this.onChange} onBlur={this.passwordCheck} />
          {this.state.passwordInfo}
        </label>
        <label>
          이름
          <input type="text" name='f_name' onChange={this.onChange} />
        </label>
        <label>
          성
          <input type="text" name='l_name' onChange={this.onChange} />
        </label>
        <label>
          성별
          <input type="text" name='gender' onChange={this.onChange} />
        </label>
        <label>
          이메일
          <input type="text" name='mail' onChange={this.onChange} />
        </label>
        <button type="submit">회원가입</button>
      </form>
    );
  }
}

export default SignUp;