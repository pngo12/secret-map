import React, { Component } from 'react';
import WorldMap from '../dashboard/worldmap';
import NavBar from './navbar';
import Footer from './../footer/footer';
import Search from './../dashboard/search';

class AdminMap extends Component {
  state = {
    countryName: '',
    showListing: false
  };

  updateCountryName = countryName => {
    this.setState({
      countryName,
      showListing: true
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <WorldMap updateCountryName={this.updateCountryName} />
        <Search
          countryName={this.state.countryName}
          showListing={this.state.showListing}
        />
        <Footer />
      </div>
    );
  }
}

export default AdminMap;
