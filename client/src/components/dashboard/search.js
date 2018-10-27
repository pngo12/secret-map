import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductByCountry } from '../../redux/actions'
import './dashboard.css'
import ProductList from './productList';
import CountryList from './productDetails';

class Search extends Component {

    state = {
        country: '',
        isShowing: false
    }

    componentDidUpdate(prevProps) {
        // Typical usage and compare props
        if (this.props.countryName !== prevProps.countryName) {
            this.setState({
                title: this.props.countryName
            })
        }
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
                    (this.state.isShowing || this.props.showListing) && (
                        <ProductList
                            title={this.state.title}
                            product={this.state.product}
                        />
                    )
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getProductByCountry: product => dispatch(getProductByCountry(product))
})

export default connect(null, mapDispatchToProps)(Search);