import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, searchForCountryOrProduct } from "../../redux/actions/index";
import NavBar from "./navbar";
import "./admin.css";
import {Redirect,} from 'react-router-dom'
import CountryDatabase from './countriesDatabase'

const productForm = {
  width: "55%",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center"
};

const spacingOfForm = {
  marginTop: 8,
  marginBottom: 8,
  borderWidth: 1,
  borderColor: "black",
  borderStyle: "solid"
};

class ProductCRUD extends Component {
  state = {
    addedToCountry: "",
    productToAdd: "",
    deletedFromCountry: "",
    productToDelete: "",
    toggleOnContinent: false,
    toggleOnCountry: false,
    continent: "",
    isHidden: false,
    name: '',
    type: '',
    description: '',
    redirect: false
  };



  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  submitNewProduct = e => {
    e.preventDefault();

    const product ={
      name: this.state.name,
      type: this.state.type,
      description: this.state.description
    }
    this.props.addProduct(product)
    .then( 
        this.setState({
          redirect: !this.state.redirect
        })
    )
  };

  resetButton = () => {
    this.setState({
      continent: ''
    })
  }

  render() {
    const {redirect} = this.state;
    let dropDownContinent = ["dropdown"];
    if (this.state.toggleOnContinent) {
      dropDownContinent.push("is-active");
    }
    if(redirect) {
      this.forceUpdate();
      this.props.searchForCountryOrProduct();
      return <Redirect to='/dashboard'/>
    }

    return (
      <div>
        <NavBar />
        <div className="container" id="wrapperStyles">
          <div style={productForm}>
            <h2 style={{ fontSize: 35 }}> Name</h2>
            <input
              className="input is-small"
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
              className="input is-small"
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
              className="textarea"
              onChange={this.handleOnChange}
              type="text"
              style={spacingOfForm}
              placeholder="Description"
              value={this.state.description}
              name="description"
            />
            <div>
              <div style={productForm}>
                <h2 style={{ fontSize: 35 }}> Add to Country </h2>
                <div className="control" style={{ textAlign: "center" }}>
                  <div className="select">
                    <select
                      style={{width: 400}}
                      value={this.state.continent}
                      onChange={this.handleOnChange}
                      // // onClick={this.showCountries}
                      name="continent"
                    >
                      <option value="">Select Continent</option>
                      <option value="Africa">Africa</option>
                      <option value="Antarctica"> Antarctica </option>
                      <option value="Asia"> Asia </option>
                      <option value="Oceania"> Australia </option>
                      <option value="Europe"> Europe </option>
                      <option value="North America"> North America </option>
                      <option value="South America"> South America </option>
                    </select>
                    {this.state.continent && <CountryDatabase continent={this.state.continent} />}
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>

          {/* <div style={{marginTop: 50}}>
                <div
                  id="dropdown"
                  className={dropDownCountry.join(" ")}
                  onClick={this.toggleOpenCountry}
                >
                  <div class="dropdown-trigger">
                    <button
                      class="button "
                      aria-haspopup="true"
                      aria-controls="dropdown-menu"
                    >
                      <span>Choose Country</span>
                      <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true" />
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a href="#" class="dropdown-item">
                        Africa
                      </a>
                      <hr class="dropdown-divider" />
                    </div>
                  </div>
                  </div>
            </div>
          </div>
           */}
          <div style={{ textAlign: "center" }}>
            <button
              style={{ marginTop: 90, width: 120, marginRight: 5, justifyContent: "center" }}
              onClick={this.submitNewProduct}
              className="button is-info"
            >
              Add Product!
            </button>
            <button
              style={{ marginTop: 90, marginLeft: 5, width: 120, justifyContent: "center" }}
              onClick={this.resetButton}
              className="button is-danger"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   products: state.products
// })

const mapDispatchToProps = dispatch => ({
  addProduct: newProduct => dispatch(addProduct(newProduct)),
  searchForCountryOrProduct: searchTerm => dispatch(searchForCountryOrProduct(searchTerm))
})

export default connect(null, mapDispatchToProps)(ProductCRUD);
