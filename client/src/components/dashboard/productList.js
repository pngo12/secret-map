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
        return (
            <div className="productList">
                <h2>Products in: {this.state.title}</h2>
                <table id="productDescription" border="1" className="table is-hoverable is-bordered">
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
                                    <tr key={index}>
                                        <td onClick={this.displayModal}>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.countries}</td>
                                    </tr>
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