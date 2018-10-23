import React, { Component } from "react"
import { Redirect } from 'react-router-dom';


class Login extends Component {

  state = {
    username: "",
    password: "",
    loginClicked: false
  }

  onLoginClick = (e) => {
    e.preventDefault();

    let { username, password } = this.state
    let user = {
      username, password
    }
    this.props.login(user);
    this.setState({
      loginClicked: true
    })
  }

  onUsernameChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div>
        {this.state.submitClicked ? <Redirect to='./homepage' />
          :
          <div className="login-page">
            <img src="https://glidewelldental.com/wp-content/uploads/2015/05/logo.jpg" style={{ margin: 25 }}></img>
            <div className="form">
              <h1 style={{ margin: 10 }}>Username</h1>
              <input class="input" style={{ margin: 10 }} type="text" value={this.state.username} onChange={this.onUsernameChange} placeholder="username" />
              <h1 style={{ margin: 10 }}>Password</h1>
              <input class="input" style={{ margin: 10 }} type="password" value={this.state.password} onChange={this.onPasswordChange} placeholder="password" />
              <div class="control">
                <a class="button is-danger" style={{ margin: 10 }}>Login</a>
              </div>
            </div>
          </div>
        }
      </div>

    );

  }
}

export default Login