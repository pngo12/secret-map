import React, { Component } from 'react';
import ProductDetails from './productDetails';
import { connect } from 'react-redux';

class ProductList extends Component {
    state = {
        modalOn: false
    }

    displayModal = () => this.setState({ modalOn: true })
    closeModal = () => this.setState({ modalOn: false })

    render() {
        return (
            <div className="productList">
                <h2>Products in: {this.props.country}</h2>
                <table id="productDescription" border="1" className="table is-hoverable is-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Countries</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td onClick={this.displayModal}>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.description}</td>
                                        {/* <td>{this.props.products.countries}</td> */}
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

const mapStateToProps = state => ({
    country: state.country,
    products: state.products
})

export default connect(mapStateToProps, null)(ProductList)