import React, { Component } from "react";
// import ProductDetails from './../dashboard/productDetails';
import { connect } from "react-redux";
import "./admin.css";
// import { getProducts } from '../../redux/actions';
import axios from "axios";

class CountryDatabase extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const fetch = await axios.get(
      `http://localhost:5000/countrydatabase/${this.props.continent}`
    );
    // console.log(fetch.data.Countries)
    this.setState({ data: fetch.data.Countries });
  }

  onClick = () => {
      console.log("YOU ARE CLICKED")
  }

  render() {
    let dropDownCountry = ["dropdown"];
    if (this.state.toggleOnCountry) {
      dropDownCountry.push("is-active");
    }
    return (
      <div>
        <div className="container is-fluid">
          <div className="AdminProducts">
            <div style={{ marginTop: 20 }}>
              <div>
                <h3> Please choose country </h3>
              </div>
              <div
                //   className={dropDownCountry.join(" ")}
                onClick={this.toggleOpenCountry}
              >
                <div className="control" style={{textAlign: "center"}}>
                  <div className="select" >
                    <select>
                        {
                            this.state.data.map((item, index) => {
                                console.log(item)
                            return (
                            <option key={index}value={item}  onClick ={this.onClick}>{item}</option>
                        )
                        })
                    }

                      {/* {Object.values(this.state.data.map((item, index) => {
                        // console.log(this.state.data + "data");
                        // console.log(item + "item");
                        console.log(item[0] + " item at index");
                        return <option key={index}>{item[index]}</option>;
                      })} */}
                      {/* {Object.values(this.state.data).map((item, index) => {
                        // console.log(this.state.data + "data");
                        // console.log(item + "item");
                        console.log(item[0] + " item at index");
                        return <option key={index}>{item[index]}</option>;
                      })} */}
                    </select>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // country: state.country,
  country: state.country
});

export default connect(
  mapStateToProps,
  null
)(CountryDatabase);
