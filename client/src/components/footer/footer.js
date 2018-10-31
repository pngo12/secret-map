import React from 'react';
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <figure>
                    <img className="glidwell-logo" src={logo} alt='logo' />
                    <h5>© 2018 Glidewell Laboratories. All Rights Reserved.</h5>
                </figure>
            </div>
        </footer>
    );
}

export default Footer;

