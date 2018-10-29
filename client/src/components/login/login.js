import React, { Component } from "react"
import { Redirect } from 'react-router-dom';
import './login.css'
import Glidewell from '../../assets/glidewellLogo.jpeg';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';

class Login extends Component {

  state = {
    email: "",
    password: "",
    loginClicked: false
  }

  onLoginClick = e => {
    e.preventDefault();
    let { email, password } = this.state
    this.props.login({ email, password })
    this.setState({
      loginClicked: true,
      email: '',
      password: ''
    })
  }

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        {this.state.submitClicked ? <Redirect to='/' />
          :
          <div id="login-page">
            <img className="border" src={Glidewell} style={{ margin: 15 }} alt="logo" />
            <div className="form">
              <h3 style={{ margin: 7 }}>Email</h3>
              <input className="input" style={{ margin: 7 }} type="text" value={this.state.email} name="email" onChange={this.handleOnChange} placeholder="username" />
              <h3 style={{ margin: 7 }}>Password</h3>
              <input id="test" className="input" style={{ margin: 7 }} type="password" value={this.state.password} name="password" onChange={this.handleOnChange} placeholder="password" />
              <div className="control">
                <a className="button is-danger" style={{ margin: 7 }} onClick={this.onLoginClick}>Login</a>
              </div>
            </div>
          </div>
        }
      </div>
    
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(Login);

