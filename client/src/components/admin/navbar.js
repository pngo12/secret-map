import React, { Component } from 'react';
import Glidewell from '../../assets/glidewellLogo.jpeg'
import { Link} from 'react-router-dom'


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
            <nav className = "navbar is-dark" style={{marginBottom: 50}}>
            <div className = 'navbar-brand '>
                <Link to='/dashboard' className = 'navbar-item'>
                    <img id="logo" src={Glidewell} alt='logo' />
                </Link>

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
        <Link to ='/dashboard' class="navbar-item">
            Get Products
          </Link>
          <Link to ='/productCrud' class="navbar-item">
            Edit Products
          </Link>
          <hr class="navbar-divider"/>
        </div>
      </div>      
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Countries
        </a>

        <div class="navbar-dropdown">
        <Link to ='/getcountry' class="navbar-item">
            Get Countries
        </Link>
        <Link to ='/countryCRUD' class="navbar-item">
            Edit Countries
          </Link>
          <hr class="navbar-divider"/>
        </div>
      </div>
    </div>

    {/* <div class="navbar-end"> */}
      <div class="navbar-item">
        <div class="buttons" style={{paddingRight: 10}}>
        <Link to='/adminmap'>
          <a class="button is-danger">
            <strong>Map</strong>
          </a>
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