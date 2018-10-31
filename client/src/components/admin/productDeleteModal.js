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
        textAlign: 'center'
      }
      
      
      const spacingOfForm = {
        marginTop: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
      };
class ProductDeleteModal extends Component {
    state = {
        name: '',
      };
    
      deleteButton = () => {
        if (this.state.name !== 'Confirm') {
            window.alert('PLEASE CONFIRM AGAIN');
        } else {
            console.log("success")
        }
      }
      

      handleOnChange = e => this.setState({ [e.target.name]: e.target.value })
    
      render() {
    return (
        <div className="modal is-active" style={{marginTop: '-200px'}}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Please Confirm</p>
                    <button className="delete" aria-label="close" onClick={this.props.closeModal1 }></button>
                </header>
                <div>


                <div className="container" style={wrapperStyles}>
        <div style={productForm}>     
          <h2 style={{ fontSize: 20 }}> Are you sure you would like to delete product? </h2>
          <br/>
          <h3> Please type "Confirm" to delete product </h3>
          <br/>
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
          <div style={{textAlign: 'center',}}>
            <button
              style={{ marginTop: 7, width: 88, marginRight: 10 }}
              onClick={this.deleteButton}
              className='button is-danger'>
              CONFIRM
            </button>
            <button
              style={{ marginTop: 7, width: 88, marginLeft: 10 }}
              onClick={this.props.closeModal1}
              className='button is-dark'>
              EXIT
            </button>
          </div>
          
        </div>
    </div>
      </div>
            </div>
      
    );
}
}


export default ProductDeleteModal;