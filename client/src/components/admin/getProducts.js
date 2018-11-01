import React, { Component } from 'react';
import { connect } from 'react-redux';
import './admin.css';
import axios from 'axios';
import ProductModal from '../../components/admin/productModal';
import NavBar from './navbar';
import { searchForCountryOrProduct } from '../../redux/actions/index';
import ProductDeleteModal from './productDeleteModal';
import Footer from './../footer/footer';

class AdminHome extends Component {
  state = {
    refreshModal: false,
    trashModal: false,
    data: {},
    tempData: '',
    name: '',
    direction: 'asc'
  };

  displayRefreshModal = n =>
    this.setState({
      tempData: n,
      refreshModal: true
    });
  closeRefreshModal = () => this.setState({ refreshModal: false });

  displayTrashModal = n =>
    this.setState({
      trashModal: true,
      tempData: n
    });
  closeTrashModal = () => this.setState({ trashModal: false });

  sortByName = sortKey => {
    const { data } = this.state;
    const direction = this.state.direction === 'asc' ? 'desc' : 'asc';
    const sortedData = data.sort((a, b) => {
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
      }
    });
    if (direction === 'desc') sortedData.reverse();
    this.setState({
      data,
      direction
    });
  };

  async componentDidMount() {
    const fetch = await axios.get(`http://localhost:5000/products/`);
    this.setState({ data: fetch.data });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className='container is-fluid' id='table_margin'>
          <div className='GetProducts'>
            <table
              id='productDescription'
              border='1'
              className='table is-hoverable is-bordered'
            >
              <thead>
                <tr>
                  <th className='table_format_name'>
                    Name
                    <button
                      className='sortButton'
                      onClick={() => this.sortByName('name')}
                    >
                      <span className='icon'>
                        <i className='fas fa-sort' />
                      </span>
                    </button>
                  </th>
                  <th className='table_format_type'>
                    Type
                    <button
                      className='sortButton'
                      onClick={() => this.sortByName('type')}
                    >
                      <span className='icon'>
                        <i className='fas fa-sort' />
                      </span>
                    </button>
                  </th>
                  <th className='table_format_description'>Description</th>
                  <th className='table_format_update'> Update </th>
                </tr>
              </thead>
              <tbody>
                {Object.values(this.state.data).map((item, index) => {
                  return (
                    <tr key={index} value={this.state.name}>
                      <td value={this.state.name}>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.description}</td>
                      <td>
                        <button
                          value={this.state.name}
                          onClick={() => this.displayRefreshModal(item)}
                          className='button is-info'
                          id='refresh'
                        >
                          {' '}
                          🔄{' '}
                        </button>
                        <button
                          onClick={() => this.displayTrashModal(item)}
                          className='button is-danger is-centered'
                          id='trash'
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {this.state.refreshModal && (
              <ProductModal
                closeRefreshModal={this.closeRefreshModal}
                data={this.state.tempData}
              />
            )}
            {this.state.trashModal && (
              <ProductDeleteModal
                closeTrashModal={this.closeTrashModal}
                data={this.state.tempData}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  searchForCountryOrProduct: searchTerm =>
    dispatch(searchForCountryOrProduct(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHome);
