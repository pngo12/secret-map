import React, { Component } from 'react';
import './admin.css'

    const wrapperStyles = {
        width: "100%",
        maxWidth: 980,
        margin: "0 auto",
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
        textAlign: 'center',
        fontSize: 35
      }
      
      
      const spacingOfForm = {
        marginTop: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
      };
class ProductModal extends Component {
    state = {
        name: '',
        type: '',
        description: ''
      };
    
      handleOnChange = e => this.setState({ [e.target.name]: e.target.value })
    
      submitProductToCountry = () => {
        let { country, product } = this.state;
        this.props.addProductToCountry({ country, product });
      };
      render() {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">UPDATE</p>
                    <button className="delete" aria-label="close" onClick={this.props.closeModal}></button>
                </header>
                <div>





                <div className="container" style={wrapperStyles}>
        <div style={productForm}>     
          <h2> Name</h2>
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
          <h2> Type </h2>
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
          <h2> Description </h2>
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
              style={{ marginTop: 7, width: 88 }}
              onClick={this.submitProductToCountry}
              className='button is-info'>
              UPDATE
            </button>
          </div>
          
        </div>
    </div>
      </div>
    
        
                <footer className="modal-card-foot">
                    <button className="button" onClick={this.props.closeModal}>Exit</button>
                </footer>
            </div>
        </div>
      
    );
}
}


export default ProductModal;