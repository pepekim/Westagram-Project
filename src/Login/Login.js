import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      hidden_pw: true,
    };
  }

  // 입력받은 값으로 id를 state를 바꿔줌
  handle_id_change = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  // 입력받은 값으로 pw를 state를 바꿔줌
  handle_pw_change = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  goToMain = () => {
    const { id, pw } = this.state;
    if (id === "taehyunkim@gmail.com" && pw === "1234") {
      alert("Login Success!");
      this.props.history.push("/Main");
    } else {
      alert("Wrong Id or Password!");
    }
  };

  show_pass = () => {
    const { hidden_pw } = this.state;
    this.setState({
      hidden_pw: !hidden_pw,
    });
  };

  handle_pw_enter = (e) => {
    const { id, pw } = this.state;
    if (e.keyCode === 13) {
      if (id === "taehyunkim@gmail.com" && pw === "1234") {
        alert("Login Success!");
        this.props.history.push("/Main");
      } else {
        alert("Wrong Id or Password!");
      }
    }
  };

  render() {
    const { handle_id_change, handle_pw_change, handle_pw_enter } = this;
    const { id, pw, hidden_pw } = this.state;
    const active_btn = id.includes("@") && pw.length >= 4; // 바뀐 state의 값을 이용해서 조건자체를 변수를 선언해서 넣는다(참, 거짓 반환)
    return (
      <div className="login_page">
        <div className="Login">
          <div className="login_container">
            <div className="top_container">
              <img src="/images/insta_logo.png" alt="인스타그램 로고" />
              <div className="input_container">
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={handle_id_change}
                />
                <div className="password">
                  <input
                    className="password"
                    type={hidden_pw ? "password" : "text"}
                    placeholder="비밀번호"
                    onChange={handle_pw_change}
                    onKeyUp={handle_pw_enter}
                  />
                  <div className="show_pass" onClick={this.show_pass}>
                    {hidden_pw ? "Show" : "Hide"}
                  </div>
                </div>
              </div>
              <button
                className={active_btn ? "active_btn" : ""} // 여기서 클래스네임을 위에서 선언한 active_btn이 참이면 active_btn으로 설정, 아니면 그냥 "" 해서 클래스네임 없앰
                onClick={this.goToMain}
              >
                로그인
              </button>
            </div>
            <div className="bottom_container">
              <span>비밀번호를 잊으셨나요?</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
