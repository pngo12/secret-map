import React, { Component } from 'react';
import ProductDetails from './productDetails';
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

                <table id="productDescription" border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Countries</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.product.map((product, index) => {
                                return (

                                    <div id="productList" key={index}>
                                        <tr>
                                            <td onClick={this.displayModal}>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>{product.countries}</td>
                                        </tr>
                                    </div>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    this.state.modalOn && <ProductDetails closeModal={this.closeModal} />
                }
            </div>
        );
    }
}

export default ProductList;