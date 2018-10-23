import React, { Component } from 'react';


class Search extends Component {

    state = {
        country: '',
        product: ''
    }

    onCountryChange = e => {
        this.setState({
            country: e.target.value
        })
    }

    onProductChange = e => {
        this.setState({
            product: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            country: '',
            product: ''
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Search By:
                    <select className="dropdown">
                        <option value="country">Country</option>
                        <option value="product">Product</option>
                    </select>
                </h3>
                <input id="countryInput" type="text" value={this.state.country} onChange={this.onCountryChange} className="input is-small" name="country" />
                <button onChange={this.onSubmit} id="searchButton" className="button is-link is-small" type="submit ">Search</button></div>
        );
    }
}

export default Search;