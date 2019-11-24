import React, { Component } from 'react';
import axios from 'axios';

import PageTamplate from 'component/template/PageTemplate.js';

class SignUp extends Component {
  state = {
    id: '',
    password: '',
    gender: '',
    mail: '',
    f_name: '',
    l_name: ''
  }

  changeId = event => {
    this.setState({ id: event.target.value });
  }

  changePW = event => {
    this.setState({ password: event.target.value });
  }

  changeGender = event => {
    this.setState({ gender: event.target.value });
  }

  changeMail = event => {
    this.setState({ mail: event.target.value });
  }

  changeFN = event => {
    this.setState({ f_name: event.target.value });
  }

  changeLN = event => {
    this.setState({ l_name: event.target.value });
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
      <PageTamplate className='Home'>
        <form onSubmit={this.submitAction}>
          <label>
            id: 
            <input type="text" name='id' onChange={this.changeId} />
          </label>
          <label>
            password: 
            <input type="text" name='password' onChange={this.changePW} />
          </label>
          <label>
            gender:
            <input type="text" name='gender' onChange={this.changeGender} />
          </label>
          <label>
            mail: 
            <input type="text" name='mail' onChange={this.changeMail} />
          </label>
          <label>
            first_name: 
            <input type="text" name='f_name' onChange={this.changeFN} />
          </label>
          <label>
            last_name: 
            <input type="text" name='l_name' onChange={this.changeLN} />
          </label>
          <button type="submit">회원가입</button>
        </form>
      </PageTamplate>
    );
  }
}

export default SignUp;