import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductByCountry } from '../../redux/actions'
import './dashboard.css'
import ProductList from './productList';
import CountryList from './productDetails';

class Search extends Component {

    state = {
        country: '',
        product: [
            { name: 'dentures', description: 'These dentures are great.', countries: ['United States, ', 'Japan, ', 'Mexico, ', 'United Kingdom'] },
            { name: 'teeth', description: 'These dentures are great.', countries: ['United States, ', 'Japan, ', 'Mexico, ', 'United Kingdom'] },
            { name: 'molars', description: 'These dentures are great.', countries: ['United States, ', 'Japan, ', 'Mexico, ', 'United Kingdom'] },
            { name: 'canine', description: 'Lorem ipsum dolor sit amet conctetur, adipisicing elit. Dolorum ratione ducimus totam quas quod veritatis, iure unde itaque quia perferendis iusto id pariatur nesciunt architecto odit placeat ipsa qui natus.', countries: ['United States, ', 'Japan, ', 'Mexico, ', 'United Kingdom'] },
        ],
        title: '',
        isShowing: false
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

    formSubmit = e => {
        e.preventDefault();
        let countryInput = this.state.country;
        this.setState({
            country: '',
            isShowing: true,
            title: countryInput
        })
    }

    render() {
        console.log("TITLE:", this.state.title);
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
                    this.state.isShowing && (
                        <ProductList
                            title={this.state.title}
                            product={this.state.product}
                        />
                    )
                }

                {/* <CountryList /> */}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getProductByCountry: product => dispatch(getProductByCountry(product))
})

export default connect(null, mapDispatchToProps)(Search);