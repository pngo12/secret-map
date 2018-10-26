import React, { Component } from 'react';
import Logo from './logo';
import ZoomPan from './zoomPan';
import Search from './search';
import ProductList from './productList';
import styles from '../../App.css'

class HomePage extends Component {

    state = {
        countryName: '',
        showListing: false
    }

    updateCountryName = countryName => {
        this.setState({
            countryName,
            showListing: true
        });
    }

    render() {
        return (
            <div>
                <Logo />
                <ZoomPan updateCountryName={this.updateCountryName} />
                <Search
                    countryName={this.state.countryName}
                    showListing={this.state.showListing}
                />
            </div>
        )
    }
}



export default HomePage;