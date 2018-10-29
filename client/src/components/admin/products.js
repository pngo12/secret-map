import React, { Component } from 'react';
import ProductDetails from './../dashboard/productDetails';
import { connect } from 'react-redux';

class AdminProducts extends Component {

    render() {
        return (
            <div className="AdminProducts is-centered">
                <table id="productDescription" border="1" className="table is-hoverable is-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.description}</td>
                                        {/* <td>{this.props.products.countries}</td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    country: state.country,
    products: state.products
})

export default connect(mapStateToProps, null)(AdminProducts)