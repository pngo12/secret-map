import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCountryByProduct,
  getProductByCountry,
  addProductToCountry,
  deleteProductFromCountry
} from '../../redux/actions/index';
import NavBar from './navbar'

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  marginBottom: 100,
  marginTop: 50,
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
  padding: 30,
  backgroundColor: 'hsl(0, 0%, 86%)'
}
const productForm = {
  width: '55%',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center'
}


const spacingOfForm = {
  marginTop: 8,
  marginBottom: 8,
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
}

class CountryCRUD extends Component {
  state = {
    addedToCountry: "",
    productToAdd: "",
    deletedFromCountry: '',
    productToDelete: ''
  };

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  submitProductToCountry = () => {
    let { country, product } = this.state;
    this.props.addProductToCountry({ country, product });
  };
  render() {
    return (
      <div>
      <NavBar/>
      <div className="container" style={wrapperStyles}>
        <div style={productForm}>
          <h2 style={{ fontSize: 35 }}> Add Product to Country </h2>
          <input
            className='input is-small'
            type="text"
            style={spacingOfForm}
            placeholder="Choose Product"
            onChange={this.handleOnChange}
            value={this.state.productToAdd}
            name="productToAdd"
          />
          <h2> to </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            style={spacingOfForm}
            placeholder="Choose Country"
            value={this.state.addedToCountry}
            name="addedToCountry"
          />
          <div>
            <button
              className='button is-info'
              style={{ marginTop: 7, width: 88, marginBottom: 20 }}>
              ADD
            </button>
          </div>
        </div>
        <div style={productForm}>
          <h2 style={{ fontSize: 35 }}> Remove Product from Country </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            style={spacingOfForm}
            placeholder="Choose Product"
            value={this.state.productToDelete}
            name="productToDelete"
          />
          <h2> from </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            style={spacingOfForm}
            placeholder="Choose Country"
            value={this.state.deletedFromCountry}
            name="deletedFromCountry"
          />
          <div>
            <button
              style={{ marginTop: 7, width: 88 }}
              onClick={this.submitProductToCountry}
              className='button is-danger'>
              REMOVE
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CountryCRUD;
