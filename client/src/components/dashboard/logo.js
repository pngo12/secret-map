import React, { Component } from 'react';
import Glidewell from '../../assets/glidewellLogo.jpeg'

class Logo extends Component {
    render() {
        return (
            <div>
                <img id="logo" src={Glidewell} alt = 'logo'/>
                <h1>World Product Map</h1>
            </div>

        );
    }
}

export default Logo;