import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchForCountryOrProduct } from '../../redux/actions'
import './dashboard.css'
import ProductList from './productList';
import CountryList from './countryList';

class Search extends Component {
    state = {
        country: '',
        isShowing: true,
        category: '',
        title: ''
    }

    componentDidUpdate(prevProps) {
        if (this.props.countryName !== prevProps.countryName) {
            this.setState({
                title: this.props.countryName
            })
        }
    }

    toUpper = str => {
        return str.split(' ')
            .map(word => {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ')
    }

    handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

    formSubmit = e => {
        e.preventDefault();
        let country = this.state.country
        country = (country.charAt(0).toUpperCase() + country.slice(1))
        this.props.searchForCountryOrProduct(country)
        this.setState({
            country: '',
            title: country,
            isShowing: true,
        });
    }

    renderCountryProduct = (isShowing, category, title) => {
        if (isShowing) {
            if (category === 'country') {
                return <CountryList title={title} />
            }
            if (category === 'product') {
                return <ProductList title={title} />
            }
            if (category === 'invalid') {
                return '';
            }
        }
        return '';
    }

    render() {
        return (
            <div className="searchBar columns" style={{ flexDirection: 'column' }}>
                <div className="searchComponent">
                    <h3 id="search">Search By Product/Country:
                    </h3>
                    <form id="search" onSubmit={this.formSubmit}>
                        <input id="countryInput" type="text" value={this.state.country} onChange={this.handleOnChange} className="input is-small" name="country" />
                        <button id="searchButton" className="button is-link is-small" type="submit ">Search</button>
                    </form>
                </div>
                {
                    this.renderCountryProduct(this.state.isShowing, this.props.category, this.state.title)
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    category: state.category
})

const mapDispatchToProps = dispatch => ({
    searchForCountryOrProduct: searchTerm => dispatch(searchForCountryOrProduct(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);