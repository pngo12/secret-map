import React, { Component } from "react";
import { connect } from "react-redux";
import "./admin.css";
import axios from "axios";
import ProductModal from "../../components/admin/productModal";
import NavBar from "./navbar";
import { getProducts } from "../../redux/actions";
import ProductDeleteModal from "./productDeleteModal";
import Footer from './../footer/footer'

class AdminHome extends Component {
  state = {
      modalOn: false,
      modalOn1: false,
      data: {},
      tempData: '',
      name: '',
    direction: "asc"
  };

  displayModal = (n) => this.setState({ 
    // name: this.state.name,
    tempData: n,
    modalOn: true 
  });
  closeModal = () => this.setState({ modalOn: false });

  displayModal1 = (n) => this.setState({ 
    modalOn1: true,
    tempData: n
  });
  closeModal1 = () => this.setState({ modalOn1: false });

  sortByName = sortKey => {
    // this.setState({
    //     data: this.state.data.product
    //   },
    //   () => {
        const { data } = this.state;
        const direction = this.state.direction === "asc" ? "desc" : "asc";
        const sortedData = data.sort((a, b) => {
          if (sortKey === "name") {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          } else if (sortKey === "type") {
            let nameA = a.type.toLowerCase();
            let nameB = b.type.toLowerCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          }
        });
        if (direction === "desc") sortedData.reverse();
        this.setState({
          data,
          direction
        });
    //   }
    // );
  };

  async componentDidMount() {
    const fetch = await axios.get(
      `http://localhost:5000/products/`
    );
    // for(var i = 0; i < fetch.data.length; i++) {
    //   console.log(fetch.data[i])
    // }
    // console.log(fetch.data.Countries)
    this.setState({ data: fetch.data});
  }


  render() {
    return (
      <div>
        <NavBar />
        <div className="container is-fluid">
          <div className="GetProducts">
            <table
              id="productDescription"
              border="1"
              className="table is-hoverable is-bordered"
            >
              <thead>
                <tr>
                  <th className ="table_format_name">
                    Name
                    <button
                      className="sortButton"
                      onClick={() => this.sortByName("name")}
                    >
                      <span className="icon">
                        <i className="fas fa-sort" />
                      </span>
                    </button>
                  </th>
                  <th className ="table_format_type">
                    Type
                    <button
                      className="sortButton"
                      onClick={() => this.sortByName("type")}
                    >
                      <span className="icon">
                        <i className="fas fa-sort" />
                      </span>
                    </button>
                  </th>
                  <th className="table_format_description">Description</th>
                  <th className="table_format_update"> Update </th>
                </tr>
              </thead>
              <tbody>
                {Object.values(this.state.data).map((item, index) => {
                  return (
                    <tr key={index} value={this.state.name}>
                      <td value ={this.state.name}>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.description}</td>
                      {/* <td>{this.props.products.countries}</td> */}
                      <td>
                        <button
                          value ={this.state.name}
                          onClick={() => this.displayModal(item)}
                          className="button is-info"
                          style={{
                            paddingLeft: 10,
                            paddingRight: 5,
                            marginRight: 13
                          }}
                        >
                          {" "}
                          🔄{" "}
                        </button>
                        <button
                        onClick={() => this.displayModal1(item)}
                          className="button is-danger is-centered"
                          style={{ paddingLeft: 10, paddingRight: 5 }}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {this.state.modalOn && (
              <ProductModal closeModal={this.closeModal} data={this.state.tempData}/>
            )}
            {this.state.modalOn1 && (
              <ProductDeleteModal closeModal1={this.closeModal1} data={this.state.tempData}/>
            )}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // country: state.country,
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  getProducts: product => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminHome);
