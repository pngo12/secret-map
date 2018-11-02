import React, { Component } from 'react';
import { connect } from 'react-redux';
import './admin.css';
import axios from 'axios';

class CountryDatabase extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const fetch = await axios.get(
      `http://localhost:5000/countrydatabase/${this.props.continent}`
    );
    this.setState({ data: fetch.data.Countries });
  }

  passToParent = countryName => {
    this.props.updateCountryName(countryName)
  }

  render() {
    let dropDownCountry = ['dropdown'];
    if (this.state.toggleOnCountry) {
      dropDownCountry.push('is-active');
    }
    return (
      <div>
        <div className='container is-fluid'>
          <div className='AdminProducts'>
            <div id='chooseCountry'>
              <div>
                <h3> Please choose a country </h3>
              </div>
              <div onClick={this.toggleOpenCountry}>
                <div className='control' id='buttonBoxes'>
                  <div className='select'>
                    <select >
                      {this.state.data.map((item, index) => {
                        return (
                          <option             
                            key={index}
                            value={item}
                            onClick={(e) => this.props.updateCountryName(e.target.value)}
                          >
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  country: state.country
});

export default connect(
  mapStateToProps,
  null
)(CountryDatabase);
