import React, { Component } from 'react';
import './admin.css'
import axios from 'axios'

    const wrapperStyles = {
        width: "100%",
        maxWidth: 980,
        margin: "0 auto",
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 20,
        backgroundColor: 'hsl(0, 0%, 86%)'
      }
      const productForm = {
        width: '55%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: 35
      }
      const productForm1 = {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        fontSize: 35
      }

      const unordereredListings ={
        display: 'inline-block', 
        float: 'none', 
        paddingLeft: 5, 
        paddingRight: 5, 
        marginRight: 3,
        marginLeft: 3,
        color: 'red', 
        borderWidth: 1, 
        borderStyle: 'solid', 
        borderColor: 'black',
        backgroundColor: 'lightgrey',
      }
      
      
      const spacingOfForm = {
        marginTop: 1,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
      };
class ProductModal extends Component {
    state = {
        name: '',
        type: '',
        description: '',
        country: ''
      };
      async componentDidMount() {
        // const fetch = await axios.get(
        //   `http://localhost:5000/products/${this.props.tempData}`
        // );
        // console.log(this.props.data)
        // console.log(fetch.data.Countries)
        // this.setState({ data: fetch.data.countries });
      }
    
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
                <h2 style={{ fontSize: 20 }}> Name</h2>
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
                <h2 style={{ fontSize: 20 }}> Type </h2>
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
                <h2 style={{ fontSize: 20 }}> Description </h2>
                <textarea
                  className='textarea is-small'
                  onChange={this.handleOnChange}
                  type="text"
                  style={spacingOfForm}
                  placeholder="Description"
                  value={this.state.description}
                  name="description"
                />




                <div style={productForm1}>
                <h2 style={{ fontSize: 20 }}> Currently Sold in: </h2>
                { 
                  Object.values(this.props.data.countries).map((item, index)=> {
                    console.log(item.name)
                  return (
                    <ul key={index} style={unordereredListings}>
                    <li style={{fontSize: 15}}>
                    {item.name} 
                    </li>
                    </ul>
                  )
                })
                }




              </div>
              <div style={productForm}>
                <h2 style={{ fontSize: 20 }}> Add To Country </h2>
                <input
                  className='input is-small'
                  onChange={this.handleOnChange}
                  type="text"
                  style={spacingOfForm}
                  placeholder="Type"
                  value={this.state.country}
                  name="type"
                />
              </div>





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