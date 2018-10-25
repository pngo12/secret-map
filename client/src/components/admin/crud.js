import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCountryByProduct,
  getProductByCountry,
  addProductToCountry,
  deleteProductFromCountry
} from '../../redux/actions/index';

const productForm = {
  width: 500
}

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  marginBottom: 100
}

const spacingOfForm = {
  marginTop: 8,
  marginBottom: 8,
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
      <div className="container" style={wrapperStyles}>
        <div style={productForm}>
          <h2 style={{fontSize: 35}}> Add Product to Country </h2>
          <input
            className='input is-small'
            type="text"
            style={spacingOfForm}
            placeholder="Choose Product"
            onChange={this.handleOnChange}
            value={this.state.product1}
            name="product1"
          />
          <h2> to </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            style={spacingOfForm}
            placeholder="Choose Country"
            value={this.state.country1}
            name="country1"
          />
          <div>
            <button 
            className='button is-info'
            style ={{marginTop: 7}}>
              submit
            </button>
          </div>
        </div>
        <div style={productForm}>
          <h2 style={{fontSize: 35}}> Remove Product from Country </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            style={spacingOfForm}
            placeholder="Choose Product"
            value={this.state.product2}
            name="product2"
          />
          <h2> from </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            style={spacingOfForm}
            placeholder="Choose Country"
            value={this.state.country2}
            name="country2"
          />
          <div>
            <button
            style ={{marginTop: 7}}
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
