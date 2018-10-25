import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductByCountry } from '../../redux/actions'
import './dashboard.css'
import ProductList from './productList';
import CountryList from './countryList';

class Search extends Component {

    state = {
        country: '',
        product: ['dentures', 'braces', ' retainers', 'teeth'],
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
        return (
            <div className="container">
                <h3>Search By:
                    <select id="drop" className="dropdown">
                        <option value="country">Country</option>
                        <option value="product">Product</option>
                    </select>
                </h3>
                <form onSubmit={this.formSubmit}>
                    <input id="countryInput" type="text" value={this.state.country} onChange={this.handleOnChange} className="input is-small" name="country" />
                    <button id="searchButton" className="button is-link is-small" type="submit ">Search</button>
                    {
                        this.state.isShowing && (
                            <ProductList
                                title={this.state.title}
                                product={this.state.product}
                            />
                        )
                    }
                </form>
                {/* <CountryList /> */}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getProductByCountry: product => dispatch(getProductByCountry(product))
})

export default connect(null, mapDispatchToProps)(Search);