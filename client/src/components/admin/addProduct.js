import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions/index';
import NavBar from './navbar';
import './admin.css';
import { Redirect } from 'react-router-dom';
import CountryDatabase from './countriesDatabase';

class ProductCRUD extends Component {
  state = {
    addedToCountry: '',
    toggleOnContinent: false,
    toggleOnCountry: false,
    continent: '',
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
  };

  submitNewProduct = e => {
    const product = {
      name: this.state.name,
      type: this.state.type,
      description: this.state.description
    };
    const country = {
      country: this.state.addedToCountry
    };
    this.props.addProduct(product);
    this.props.addCountryToProduct(country).then(
      this.setState({
        redirect: !this.state.redirect
      })
    );
  };

  resetButton = () => {
    this.setState({
      continent: ''
    });
  };

  render() {
    const { redirect } = this.state;
    let dropDownContinent = ['dropdown'];
    if (this.state.toggleOnContinent) {
      dropDownContinent.push('is-active');
    }
    if (redirect) {
      return <Redirect to='/dashboard' />;
    }

    return (
      <div>
        <NavBar />
        <div className='container' id='wrapperStyles'>
          <div id='productForm'>
            <h2 id='addProductFont'> Name</h2>
            <input
              className='input is-small'
              type='text'
              id='spacingOfForm'
              placeholder='name'
              onChange={this.handleOnChange}
              value={this.state.name}
              name='name'
            />
          </div>
          <div id='productForm'>
            <h2 id='addProductFont'> Type </h2>
            <input
              className='input is-small'
              onChange={this.handleOnChange}
              type='text'
              id='spacingOfForm'
              placeholder='Type'
              value={this.state.type}
              name='type'
            />
          </div>
          <div id='productForm'>
            <h2 id='addProductFont'> Description </h2>
            <textarea
              className='textarea'
              onChange={this.handleOnChange}
              type='text'
              id='spacingOfForm'
              placeholder='Description'
              value={this.state.description}
              name='description'
            />
            <div>
              <div id='productForm'>
                <h2 id='addProductFont'> Add to Country </h2>
                <div className='control' id='buttonBoxes'>
                  <div className='select'>
                    <select
                      id='addToCountrySelect'
                      value={this.state.continent}
                      onChange={this.handleOnChange}
                      name='continent'
                    >
                      <option value=''>Select Continent</option>
                      <option value='Africa'>Africa</option>
                      <option value='Antarctica'> Antarctica </option>
                      <option value='Asia'> Asia </option>
                      <option value='Oceania'> Australia </option>
                      <option value='Europe'> Europe </option>
                      <option value='North America'> North America </option>
                      <option value='South America'> South America </option>
                    </select>
                    {this.state.continent && (
                      <CountryDatabase continent={this.state.continent} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
          <div id='buttonBoxes'>
            <button
              id='addProductButton'
              onClick={this.submitNewProduct}
              className='button is-success'
            >
              Add Product!
            </button>
            <button
              id='resetCountryButton'
              onClick={this.resetButton}
              className='button is-danger'
            >
              RESET Country
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addProduct: newProduct => dispatch(addProduct(newProduct))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCRUD);
