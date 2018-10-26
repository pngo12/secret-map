import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductByCountry } from '../../redux/actions'
import './dashboard.css'
import ProductList from './productList';

class Search extends Component {
    state = {
        country: '',
        // product: [
        //     { name: 'dentures', description: 'These dentures are great.', countries: ['United States, ', 'Japan, ', 'Mexico, ', 'United Kingdom'] },
        //     { name: 'teeth', description: 'These dentures are great.', countries: ['United States, ', 'Japan, ', 'Mexico, ', 'United Kingdom'] },
        //     { name: 'molars', description: 'These dentures are great.', countries: ['United States, ', 'Japan, ', 'Mexico, ', 'United Kingdom'] },
        //     { name: 'canine', description: 'Lorem ipsum dolor sit amet conctetur, adipisicing elit. Dolorum ratione ducimus totam quas quod veritatis, iure unde itaque quia perferendis iusto id pariatur nesciunt architecto odit placeat ipsa qui natus.', countries: ['United States, ', 'Japan, ', 'Mexico, ', 'United Kingdom'] },
        // ],
        isShowing: false
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.countryName !== prevProps.countryName) {
            this.setState({
                title: this.props.countryName
            })
        }
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

    formSubmit = e => {
        e.preventDefault();
        let country = this.state.country
        country = (country.charAt(0).toUpperCase() + country.slice(1))
        this.props.getProductByCountry(country)
        this.setState({
            country: '',
            isShowing: true,
        });
    }

    render() {
        return (
            <div className="searchBar columns" style={{ flexDirection: 'column' }}>
                <div>
                    <h3 id="search">Search By:
                    <select id="drop" className="dropdown">
                            <option value="country">Country</option>
                            <option value="product">Product</option>
                        </select>
                    </h3>
                    <form id="search" onSubmit={this.formSubmit}>
                        <input id="countryInput" type="text" value={this.state.country} onChange={this.handleOnChange} className="input is-small" name="country" />
                        <button id="searchButton" className="button is-link is-small" type="submit ">Search</button>
                    </form>
                </div>

                {
                    this.state.isShowing && <ProductList/>
                }

                {/* <CountryList /> */}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getProductByCountry: country => dispatch(getProductByCountry(country))
});

export default connect(null, mapDispatchToProps)(Search);