import React, { Component } from 'react';
import logo from '../../assets/logo.png'


class Footer extends Component {



    render() {
        return (
            <div>
                <img className="glidwell-logo" src={logo} alt='logo'/>
                <h5 className="footer-text">© 2018 Glidewell Laboratories. All Rights Reserved.</h5>
                
            </div>
        )
    }
}



export default Footer;

