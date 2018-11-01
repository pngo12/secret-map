import React, { Component } from 'react';
import Glidewell from '../../assets/glidewellLogo.jpeg'
import { Link } from 'react-router-dom'


class NavBar extends Component {

  state = {
    toggleOn: false,
    redirect: false
  }

  toggleOpen = () => {
    this.setState({ toggleOn: !this.state.toggleOn })
  }

  render() {
    let burgerClass = ['navbar-menu'];
    if (this.state.toggleOn) {
      burgerClass.push('is-active')
    }

    return (
      <nav className="navbar is-dark" style={{ marginBottom: 50 }}>
        <div className='navbar-brand '>
          <Link to='/dashboard' className='navbar-item'>
            <img id="logo" src={Glidewell} alt='logo' />
          </Link>

          <a role="button" className="navbar-burger burger" onClick={this.toggleOpen} data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className={burgerClass.join(' ')}>
          <div className="navbar-end" style={{ marginRight: 20 }}>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Products
        </a>

              <div className="navbar-dropdown">
                <Link to='/dashboard' className="navbar-item">
                  Get Products
          </Link>
                <Link to='/productCrud' className="navbar-item">
                  Add Product
          </Link>
                <hr className="navbar-divider" />
              </div>
            </div>
            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Countries
        </a>

              <div className="navbar-dropdown">
                <Link to='/getcountry' className="navbar-item">
                  Get Countries
        </Link>
                <Link to='/countryCRUD' className="navbar-item">
                  Edit Countries
          </Link>
                <hr className="navbar-divider" />
              </div>
            </div> */}
          </div>

          {/* <div className="navbar-end"> */}
          <div className="navbar-item">
            <div className="buttons" style={{ paddingRight: 10 }}>
              <Link to='/adminmap' className="button is-danger">
                  <strong>Map</strong>
              </Link>
            </div>
            {/* </div> */}
          </div>

        </div>


      </nav>

    );
  }
}

export default NavBar;