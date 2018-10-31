import React, { Component } from 'react';
import WorldMap from '../dashboard/worldmap';
import NavBar from './navbar';

class AdminMap extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <WorldMap />
            </div>
        );
    }
}

export default AdminMap;