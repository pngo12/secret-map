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
      //       <div className="section is-medium">
      //         <div className="container notification loggingOn" style={{ height: 500, paddingRight: 24 }}>
      //           <div id="login-page">
      //             <form className="formGrouping">
      //               <img src={Glidewell} style={{ width: '41%', height: '30%', marginBottom: '2%' }} alt="logo" />
      //               <div className="form-group">
      //                 <label style={{ fontSize: '1em' }}> Email Address </label>
      //                 <br />
      //                 <input
      //                   className="input is-normal"
      //                   style={{ width: '25%' }}
      //                   value={this.state.email}
      //                   type="text"
      //                   name="email"
      //                   placeholder="example@glidewell.com"
      //                   onChange={this.handleOnChange}
      //                 />
      //               </div>
      //               <div className="form-group">
      //                 <label style={{ fontSize: '1em' }}> Password </label>
      //                 <br />
      //                 <input
      //                   className="input is-normal"
      //                   style={{ width: '25%' }}
      //                   value={this.state.password}
      //                   type="password"
      //                   name="password"
      //                   placeholder="Password"
      //                   onChange={this.handleOnChange}
      //                 />
      //               </div>
      //               <button
      //                 type="submit"
      //                 className='button is-link'
      //                 style={{ marginTop: '2%' }}
      //                 onClick={this.onLoginClick}>
      //                 Submit
      //             </button>
      //             </form>
      //           </div>
      //         </div>
      //       </div>
      //   }
      // </section>
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
  login: user => dispatch(login(user))
});

export default connect(null, mapPropsToDispatch)(Login);

