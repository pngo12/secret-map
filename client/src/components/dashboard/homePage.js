import React, { Component } from 'react';
import Logo from './logo';
import ZoomPan from './zoomPan';
import Search from './search';
import ProductList from './productList';
import styles from '../../App.css'

class HomePage extends Component {

    render() {
        return ( 
            <div>
                <Logo />
                <ZoomPan />
                <Search />
                {/* <ProductList /> */}
            </div>
         );
    }
}



export default HomePage;