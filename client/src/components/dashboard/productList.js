import React, { Component } from 'react';
import CountryList from './countryList';
// const ProductList = props => {
//     return (
//         <div>
//             <h1>Products in: {props.title}</h1>
//             {
//                 props.product.map((x, index) => {
//                     return (
//                         <div id="productList" key={index}>
//                             <button onClick={() => this.displayModal(props.product[index])}>{props.product[index]}</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>

//     );
// }

class ProductList extends Component {
    state = {
        modalOn: false,
        title: this.props.title
    }

    displayModal = () => {
        console.log("HERE")
        this.setState({ modalOn: true })
    }

    closeModal = () => {
        this.setState({ modalOn: false })
    }

    render() {
        console.log("MODAL", this.state.modalOn)
        return (
            <div>
                <h1>Products in: {this.state.title}</h1>
                {/* <button onClick={this.displayModal}>TEST MODAL</button> */}
                <div className="row">
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Descrtiption</th>
                        </tr>
                    </table>
                </div>
                {

                    this.props.product.map((product, index) => {
                        return (

                            <div id="productList" key={index}>

                                <p onClick={this.displayModal}>{product}</p>
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.descrtiption}</td>
                                    <td>{product.country}</td>
                                </tr>

                            </div>

                        )
                    })
                }
                {
                    this.state.modalOn && <CountryList closeModal={this.closeModal} />
                }
            </div>
        );
    }
}

export default ProductList;