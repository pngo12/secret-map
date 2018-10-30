import React, { Component } from "react";
import { connect } from "react-redux";
import {
    addProduct
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

class ProductCRUD extends Component {
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
          <h2 style={{ fontSize: 35 }}> Name</h2>
          <input
            className='input is-small'
            type="text"
            style={spacingOfForm}
            placeholder="name"
            onChange={this.handleOnChange}
            value={this.state.name}
            name="name"
          />
        </div>
        <div style={productForm}>
          <h2 style={{ fontSize: 35 }}> Type </h2>
          <input
            className='input is-small'
            onChange={this.handleOnChange}
            type="text"
            style={spacingOfForm}
            placeholder="Type"
            value={this.state.type}
            name="type"
          />
        </div>
        <div style={productForm}>
          <h2 style={{ fontSize: 35 }}> Description </h2>
          <textarea
            className='textarea'
            onChange={this.handleOnChange}
            type="text"
            style={spacingOfForm}
            placeholder="Description"
            value={this.state.description}
            name="description"
          />
          <div>
            <button
              style={{ marginTop: 7, width: 120 }}
              onClick={this.submitProductToCountry}
              className='button is-info'>
              Add Product!
            </button>
          </div>
          
        </div>
    </div>
      </div>
    );
  }
}

export default ProductCRUD;
