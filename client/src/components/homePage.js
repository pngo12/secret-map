import React, { Component } from 'react';
import Logo from './logo';
import ZoomPan from '../components/pages/zoomPan';
import Search from '../components/search';

class HomePage extends Component {

    render() { 
        return ( 
            <div>
                <Logo />
                <ZoomPan />
                <Search />
            </div>
         );
    }
}


 
export default HomePage;