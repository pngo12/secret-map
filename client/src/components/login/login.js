import React, { Component } from "react"
import { Redirect } from 'react-router-dom';
import './login.css'
import Glidewell from '../../assets/glidewellLogo.jpeg';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';





class Login extends Component {

  state = {
    username: "",
    password: "",
    loginClicked: false
  }

  onLoginClick = e => {
    e.preventDefault();
    console.log("Login clicked")

    let { username, password } = this.state
    let user = {
      username, password
    }
    this.props.login(user)
    this.setState({ loginClicked: true })
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

  // handleOnChange = e => this.setState({ [e.target.name]: e.target.value })


  render() {
    return (
      <section className="hero is-fullheight has-background-grey">

        {
          this.state.submitClicked
            ? <Redirect to='/' />
            :
            <div className="section is-medium">
              <div className="container notification loggingOn" style={{ height: 500, paddingRight: 24 }}>
                <div id="login-page">
                  <form className="formGrouping">
                    <img src={Glidewell} style={{ width: '41%', height: '30%', marginBottom: '2%' }} alt="logo" />
                    <div className="form-group">
                      <label style={{ fontSize: '1em' }}> Username </label>
                      <br />
                      <input
                        className="input is-normal"
                        style={{ width: '25%' }}
                        value={this.state.username}
                        type="text"
                        placeholder="Username"
                        onChange={this.onUsernameChange}
                      />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: '1em' }}> Password </label>
                      <br />
                      <input
                        className="input is-normal"
                        style={{ width: '25%' }}
                        value={this.state.password}
                        type="password"
                        placeholder="Password"
                        onChange={this.onPasswordChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className='button is-link'
                      style={{ marginTop: '2%' }}
                      onClick={this.onLoginClick}
                    >
                      Submit
                  </button>
                  </form>
                </div>

              </div>
            </div>


          // Should this div be a form?
          // <div id="login-page">
          //   <img src={Glidewell} style={{ margin: 25 }} alt="logo" />
          //   <div className="form">
          //     <h1 style={{ margin: 10 }}>Username</h1>
          //     <input class="input" style={{ margin: 10 }} type="text" value={this.state.username} name="username" onChange={this.handleOnChange} placeholder="username" />
          //     <h1 style={{ margin: 10 }}>Password</h1>
          //     <input id="test" class="input" style={{ margin: 10 }} type="password" value={this.state.password} name="password" onChange={this.handleOnChange} placeholder="password" />
          //     <div class="control">
          //       <a class="button is-danger" style={{ margin: 10 }}>Login</a>
          //     </div>
          //   </div>
          // </div>
        }
      </section>
    );
  }
}

/**
 * - On your Submit button, add an onClick function thaht will use this.props.login(user) 
 * - Attach it to the submit button
 * - Make sure thhe onClick function works (through console log or something)
 * - Make sure the action is being hit by adding a console.log in the action (eg. console.log("INSIDE ACTION: Trying to Login:"))
 * - Make sure what you are getting back frmo the axios call 
 * - Make sure reducer is updating state properly by using the redux dev tools in your browser
 */
const mapPropsToDispatch = dispatch => ({

  login: (user) => { dispatch(login(user)) }
});

export default connect(null, mapPropsToDispatch)(Login);


