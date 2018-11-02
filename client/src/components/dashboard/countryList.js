import React, { Component } from 'react';
import { connect } from 'react-redux';
import './dashboard.css';

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

                if (sortKey === 'name') {
                    let nameA = a.name.toLowerCase();
                    let nameB = b.name.toLowerCase();
    
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0; 
                } else if (sortKey === 'type') {
                    let nameA = a.type.toLowerCase();
                    let nameB = b.type.toLowerCase();
    
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0; 
                } else if (sortKey === 'country') {
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

    render() {
        return (
            <div className="productList">
                <h2>{this.props.title} are sold in these countries:</h2>
                <table id="productDescription" border="1" className="table is-hoverable is-bordered">
                    <thead>
                        <tr>
                            <th>Countries 
                            <span className="icon">
                                    <i className="fas fa-sort" onClick={() => this.sortByName('name')}></i>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
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

export default connect(mapStateToProps, null)(ProductList)