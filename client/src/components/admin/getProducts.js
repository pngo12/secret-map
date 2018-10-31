import React, { Component } from 'react';
import { connect } from 'react-redux';
import './admin.css';
import axios from 'axios';
import ProductModal from '../../components/admin/productModal';
import NavBar from './navbar'


class GetProducts extends Component {
    state = {
        modalOn: false,
        data: {},
        direction: 'asc'
    }

    displayModal = () => this.setState({ modalOn: true })
    closeModal = () => this.setState({ modalOn: false })

    sortByName = (sortKey) => {
        this.setState({
            data: this.state.data
        }, () => {
            const { data } = this.state;
            const direction = this.state.direction === 'asc' ? 'desc' : 'asc';
            const sortedData = data.sort((a, b) => {

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
                }

            });

            if (direction === 'desc') sortedData.reverse();
            this.setState({
                data,
                direction
            });

        });
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/products/`)
            .then(res =>
                this.setState({
                    data: res.data
                }))
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className='container is-fluid'>
                    <div className="GetProducts">
                        <table id="productDescription" border="1" className="table is-hoverable is-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: '15%' }}>Name
                                <button className="sortButton" onClick={() => this.sortByName('name')}>
                                            <span className="icon">
                                                <i className="fas fa-sort"></i>
                                            </span>
                                        </button>
                                    </th>
                                    <th style={{ width: '10%' }}>Type
                                <button className="sortButton" onClick={() => this.sortByName('type')} >
                                            <span className="icon">
                                                <i className="fas fa-sort"></i>
                                            </span>
                                        </button>
                                    </th>
                                    <th style={{ width: '66%' }}>Description</th>
                                    <th style={{ width: '9%' }}> Update </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.values(this.state.data).map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.type}</td>
                                                <td>{item.description}</td>
                                                {/* <td>{this.props.products.countries}</td> */}
                                                <td>
                                                    <button onClick={this.displayModal} className="button is-info" style={{ paddingLeft: 10, paddingRight: 5, marginRight: 13 }}> 🔄 </button>
                                                    <button className="button is-danger is-centered" style={{ paddingLeft: 10, paddingRight: 5 }}>🗑️</button>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {
                            this.state.modalOn && <ProductModal closeModal={this.closeModal} />
                        }

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // country: state.country,
    products: state.products
})

export default connect(mapStateToProps, null)(GetProducts)