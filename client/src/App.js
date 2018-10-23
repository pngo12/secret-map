import React, { Component } from 'react';
import SubregionsMap from './components/pages';
import ZoomPan from './components/pages/zoomPan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src="https://glidewelldental.com/wp-content/uploads/2015/05/logo.jpg" />
          <h1>World Product Map</h1>
        </div>
        {/* <image url={require('../assets/glideWellLogo.jpeg')}/> */}
        {/* <SubregionsMap /> */}
        <div id="map" className="container">
          <ZoomPan />
        </div>
        <div className="container">
        <h1>Search By:
        <select className="dropdown">
            <option value="country">Country</option>
            <option value="product">Product</option>
          </select>
        </h1>
        <input type="text" className="input is-small" name="country"/>
        <button className="button is-link is-small">Search</button></div>
      </div>
    );
  }
}

export default App;
