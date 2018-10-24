import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCountryByProduct,
  getProductByCountry,
  addProductToCountry,
  deleteProductFromCountry
} from '../../redux/actions/index';

const productForm = {
  width: 400
}

class AdminCRUD extends Component {
  state = {
    country1: "",
    product1: "",
    country2: '',
    product2: ''
  };

  // productChange = e => {
  //     this.setState({
  //         product1: e.target.value
  //     })
  // }
  // countryChange = e => {
  //     this.setState({
  //         country1: e.target.value
  //     })
  // }
  // productChange1 = e => {
  //     this.setState({
  //         product2: e.target.value
  //     })
  // }
  // countryChange1 = e => {
  //     this.setState({
  //         country2: e.target.value
  //     })
  // }

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  submitProductToCountry = () => {
    let { country, product } = this.state;
    this.props.addProductToCountry({
      country: country,
      product: product
    });
  };
  render() {
    return (
      <div className="container">
        <div style={productForm}>
          <h1> Add Product to Country </h1>
          <input
            className='input is-small'
            type="text"
            placeholder="Choose Product"
            onChange={this.handleOnChange}
            value={this.state.product1}
          />
          <h2> to </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            placeholder="Choose Country"
            value={this.state.country1}
          />
          <div>
            <button className='button is-info'>
              submit
            </button>
          </div>
        </div>
        <div style={productForm}>
          <h1> Remove Product from Country </h1>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            placeholder="Choose Product"
            value={this.state.product2}
          />
          <h2> from </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            placeholder="Choose Country"
            value={this.state.country2}
          />
          <div>
            <button
              onClick={this.submitProductToCountry}
              className='button is-info'>
              submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminCRUD;
