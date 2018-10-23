import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="container">
                <h1>Search By:
        <select className="dropdown">
                        <option value="country">Country</option>
                        <option value="product">Product</option>
                    </select>
                </h1>
                <input type="text" className="input is-small" name="country" />
                <button className="button is-link is-small">Search</button></div>
        );
    }
}

export default Search;