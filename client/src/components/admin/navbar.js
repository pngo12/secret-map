import React, { Component } from 'react';
import Glidewell from '../../assets/glidewellLogo.jpeg'

class NavBar extends Component {

    
        
        state = {
            toggleOn: false
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
            <nav className = "navbar is-dark">
            <div className = 'navbar-brand '>
                <a className = 'navbar-item' href='#navbar'>
                    <img id="logo" src={Glidewell} alt='logo' />
                </a>

                <a role="button" class="navbar-burger burger" onClick={this.toggleOpen} data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
  </div>
            <div id="navbarBasicExample" className={burgerClass.join(' ')}>
    <div class="navbar-end" style ={{marginRight: 20}}>

    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Products
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Get Products
          </a>
          <a class="navbar-item">
            Edit Products
          </a>
          <hr class="navbar-divider"/>
        </div>
      </div>      
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Countries
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Get Countries
          </a>
          <a class="navbar-item">
            Edit Countries
          </a>
          <hr class="navbar-divider"/>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          User
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Create User Privelege
          </a>
          <a class="navbar-item">
            Revoke User Privelege
          </a>
          <hr class="navbar-divider"/>
        </div>
      </div>
    </div>

    {/* <div class="navbar-end"> */}
      <div class="navbar-item">
        <div class="buttons" style={{paddingRight: 10}}>
          <a class="button is-danger">
            <strong>Map</strong>
          </a>
        </div>
      {/* </div> */}
    </div>
  </div>


            </nav>

        );
    }
}

export default NavBar;