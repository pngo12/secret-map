import React, { Component } from 'react';
import './admin.css';

class ProductModal extends Component {
  state = {
    name: '',
    type: '',
    description: '',
    country: ''
  };
  handleOnChange = e => this.setState({ [e.target.name]: e.target.value });

  submitProductToCountry = () => {
    let { country, product } = this.state;
    this.props.addProductToCountry({ country, product });
  };
  
  render() {
    return (
      <div className='modal is-active'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Update Product</p>
            <button
              className='delete'
              aria-label='close'
              onClick={this.props.closeRefreshModal}
            />
          </header>
          <div>
            <div className='container' id='wrapperStylesUpdate'>
              <div id='productFormUpdate'>
                <h2 id='confirmationText'> Name</h2>
                <input
                  className='input is-small'
                  type='text'
                  id='spacingOfFormUpdate'
                  placeholder='name'
                  onChange={this.handleOnChange}
                  value={this.state.name}
                  name='name'
                />
              </div>
              <div id='productFormUpdate'>
                <h2 id='confirmationText'> Type </h2>
                <input
                  className='input is-small'
                  onChange={this.handleOnChange}
                  type='text'
                  id='spacingOfFormUpdate'
                  placeholder='Type'
                  value={this.state.type}
                  name='type'
                />
              </div>
              <div id='productFormUpdate'>
                <h2 id='confirmationText'> Description </h2>
                <textarea
                  className='textarea is-small'
                  onChange={this.handleOnChange}
                  type='text'
                  id='spacingOfFormUpdate'
                  placeholder='Description'
                  value={this.state.description}
                  name='description'
                />
                <div id='productFormUpdate1'>
                  <h2 id='confirmationText'> Currently Sold in: </h2>
                  {Object.values(this.props.data.countries).map(
                    (item, index) => {
                      return (
                        <ul key={index} id='unorderedListings'>
                          <li id='listingStyle'>{item.name}</li>
                        </ul>
                      );
                    }
                  )}
                </div>
                <div id='productFormUpdate'>
                  <h2 id='confirmationText'> Add To Country </h2>
                  <input
                    className='input is-small'
                    onChange={this.handleOnChange}
                    type='text'
                    id='spacingOfFormUpdate'
                    placeholder='Country'
                    value={this.state.country}
                    name='country'
                  />
                </div>
                <div>
                  <button
                    id='updateToCountryButton'
                    onClick={this.submitProductToCountry}
                    className='button is-info'
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <footer className='modal-card-foot'>
            <button className='button' onClick={this.props.closeRefreshModal}>
              Exit
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default ProductModal;
