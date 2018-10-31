import React, { Component } from 'react';
import ProductDetails from './productDetails';
import { connect } from 'react-redux';

class ProductList extends Component {
    state = {
        modalOn: false,
        products: [],
        direction: 'asc'
    }

    displayModal = () => this.setState({ modalOn: true })
    closeModal = () => this.setState({ modalOn: false })

    sortByName = (sortKey) => {

        this.setState({
            products: this.props.products
        }, () => {
            const { products } = this.state;
            const direction = this.state.direction === 'asc' ? 'desc' : 'asc';
            const sortedData = products.sort((a, b) => {

                if (sortKey == 'name') {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
    
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0; 
                } else if (sortKey == 'type') {
                    let nameA = a.type.toLowerCase();
                    let nameB = b.type.toLowerCase();
    
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0; 
                } else if (sortKey == 'country') {
                    let nameA = a.type.toLowerCase();
                    let nameB = b.type.toLowerCase();
    
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0; 
                }
                    
            });
    
            if (direction === 'desc') sortedData.reverse();
            this.setState({
                products,
                direction
            });

        });
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="productList">
                <h2>(product name) sold in these countries: {this.props.name}</h2>
                <table id="productDescription" border="1" className="table is-hoverable is-bordered">
                    <thead>
                        <tr>
                            <th>Name
                                <button className="sortButton" onClick={() => this.sortByName('name')}>
                            <span className="icon">
                                    <i className="fas fa-sort"></i>
                                </span>
                                </button>
                            </th>
                            <th>Type
                                <button className="sortButton" onClick={() => this.sortByName('type')} >
                            <span className="icon">
                                    <i className="fas fa-sort"></i>
                                </span>
                                </button>
                            </th>
                            <th>Countries
                            <button className="sortButton" onClick={() => this.sortByName('type')} >
                            <span className="icon">
                                    <i className="fas fa-sort"></i>
                                </span>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td onClick={this.displayModal}>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.countries}</td>
                                        {/* <td>{this.props.products.countries}</td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {/* {
                    this.state.modalOn && <ProductDetails closeModal={this.closeModal} />
                } */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    country: state.country,
    products: state.products
})

export default connect(mapStateToProps, null)(ProductList)