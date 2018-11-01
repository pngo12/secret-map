import React, { Component } from 'react';
import Glidewell from '../../assets/glidewellLogo.jpeg'
import './dashboard.css';

class Logo extends Component {
    render() {
        return (
            <div>
                <img id="logo" src={Glidewell} alt='logo' />
                <h1>Glidewell Product Map</h1>
            </div>

        );
    }
}

export default Logo;