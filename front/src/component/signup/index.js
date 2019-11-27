import React, { Component } from 'react';
import axios from 'axios';

import './style/SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      idInfo: '',
      idPossible: null,
      password: '',
      passwordInfo: '',
      passwordCheck: '',
      passwordCheckInfo: '',
      passwordCheckPossible: null,
      f_name: '',
      f_nameInfo: '',
      l_name: '',
      L_nameInfo: '',
      gender: '',
      mail: '',
      mailInfo: '',
      phone: '',
      phoneInfo: ''
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  idBlur = event => {
    if (this.state.id){
      axios.get(`http://localhost:8008/api/user/idCheck?id=${event.target.value}`)
        .then(res => {
        this.setState({ idInfo: res.data.info, idPossible: res.data.possible });
      })
    }
    else {
      this.setState({ idInfo: "필수 정보입니다.", idPossible: false });
    }
  }

  passwordBlur = event => {
    console.log(this.state);
    if (this.state.password) {
      const rule = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
      if (rule.test(this.state.password)) {
        this.setState({ passwordInfo: '' });
      }
      else {
        this.setState({ passwordInfo: '8~16자 영문, 숫자, 특수문자를 사용하세요.' });
      }
    } else {
      this.setState({ passwordInfo: "필수 정보입니다." });
    }
  }

  passwordCheckBlur = event => {
    if (this.state.passwordCheck) {
      if (this.state.password === this.state.passwordCheck) this.setState({ passwordCheckInfo: "비밀번호가 일치합니다.", passwordCheckPossible: true });
      else this.setState({ passwordCheckInfo: "비밀번호가 일치하지 않습니다.", passwordCheckPossible: false });
    }
    else this.setState({ passwordCheckInfo: "필수 정보입니다.",  passwordCheckPossible: false });
  }

  mailBlur = event => {
    if (this.state.mail) {
      const rule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (rule.test(this.state.mail)) {
        axios.get(`http://localhost:8008/api/user/mailCheck?mail=${event.target.value}`)
          .then(res => {
            this.setState({ mailInfo: res.data.info })
          })
      }
      else this.setState({ mailInfo: "형식이 올바르지 않은 이메일입니다." })
    }
    else this.setState({ mailInfo: "필수 정보입니다." })
  }

  phoneBlur = event => {
    if (this.state.phone) {
      const rule = /^\d{3}\d{3,4}\d{4}$/;;
      if (rule.test(this.state.phone)) {
        axios.get(`http://localhost:8008/api/user/phoneCheck?phone=${event.target.value}`)
          .then(res => {
            this.setState({ phoneInfo: res.data.info })
          })
      } else this.setState({ phoneInfo: "형식이 올바르지 않은 휴대전화 번호입니다." })
    }
    else this.setState({ phoneInfo: "필수 정보입니다." })
  }

  onBlur = event => {
    if (!this.state[event.target.name]) {
      this.setState({ [event.target.name + "Info"] : "필수 정보입니다." });
    }
    else {
      this.setState({ [event.target.name + "Info"] : '' });
    }
  }

  submitAction = event => {
    event.preventDefault();
    var user = this.state;
    if (!user.idPossible) {
      alert("아미 등록된 아이디입니다.");
    }
    else if (!user.passwordCheckPossible) {
      alert("비밀번호가 일치하지 않습니다.");
    }
    else if (user.passwordInfo || user.l_nameInfo || user.f_nameInfo || user.mailInfo || user.phoneInfo) {
      alert("필수 정보를 입력해주세요.");
    }
    else {
      axios.post('http://localhost:8008/api/user/signup', { user })
        .then(res => {
          console.log(res);
          switch(res.status) {
            case 200:
              alert(res.info);
              this.props.history.push('/login');
              break;
            case 403:
              alert(res.info);
              break;
          }
        })
    }
  }

  render() {
    return (
      <section className="signup">
        <h2>회원가입</h2>
        <form onSubmit={this.submitAction}>
          <ul>
            <li>
              <h3>아이디</h3>
              <input type="text" name='id' onChange={this.onChange} onBlur={this.idBlur} />
              {
              this.state.idPossible
              ? (<div className="possible">{this.state.idInfo}</div>)
              : (<div className="alert">{this.state.idInfo}</div>)
              }
            </li>
            <li>
              <h3>비밀번호</h3>
              <input type="password" name='password' onChange={this.onChange} onBlur={this.passwordBlur} />
              <div className="alert">{this.state.passwordInfo}</div>
            </li>
            <li>
              <h3>비밀번호 재확인</h3>
              <input type="password" name='passwordCheck' onChange={this.onChange} onBlur={this.passwordCheckBlur} />
              {
                this.state.passwordCheckPossible
                ? (<div className="possible">{this.state.passwordCheckInfo}</div>)
                : (<div className="alert">{this.state.passwordCheckInfo}</div>)
              }
            </li>
            <li>
              <h3>이름</h3>
              <input type="text" name='f_name' onChange={this.onChange} onBlur={this.onBlur} />
              <div className="alert">{this.state.f_nameInfo}</div>
            </li>
            <li>
              <h3>성</h3>
              <input type="text" name='l_name' onChange={this.onChange} onBlur={this.onBlur} />
              <div className="alert">{this.state.l_nameInfo}</div>
            </li>
            <li>
              <h3>성별</h3>
              <div className="gen">
              <select name='gender' onChange={this.onChange}>
                <option value = "default" disabled>성별</option>
                <option value = "비공개">비공개</option>
                <option value = "남자">남자</option>
                <option value = "여자">여자</option>
              </select>
              </div>
            </li>
            <li>
              <h3>이메일</h3>
              <input type="text" name='mail' onChange={this.onChange} onBlur={this.mailBlur} />
              <div className="alert">{this.state.mailInfo}</div>
            </li>
            <li>
              <h3>휴대전화</h3>
              <input type="text" name='phone' onChange={this.onChange} onBlur={this.phoneBlur} />
              <div className="alert">{this.state.phoneInfo}</div>
            </li>
          </ul>
          <button type="submit">가입하기</button>
        </form>
      </section>
    );
  }
}

export default SignUp;