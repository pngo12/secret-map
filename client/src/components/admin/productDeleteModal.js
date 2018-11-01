import React, { Component } from "react";
import "./admin.css";
import { deleteProduct } from "../../redux/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class ProductDeleteModal extends Component {
  state = {
    name: "",
    redirect: false
  };

  deleteButton = e => {
    e.preventDefault();

    const name = {
      name: this.state.name
    };
    if (this.state.name != "Confirm") {
      window.alert("Please confirm again");
    } else {
      this.props.deleteProduct(this.props.data._id).then(
        this.setState({
          redirect: !this.state.redirect
        })
      );
    }
  };

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Please Confirm</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.props.closeModal1}
            />
          </header>
          <div>
            <div className="container" id="wrapperStylesDelete">
              <div id="productForm">
                <h2 id="confirmationText">
                  {" "}
                  Are you sure you would like to delete {this.props.data.name} ?
                </h2>
                <br />
                <h3> Please type "Confirm" to delete product </h3>
                <br />
                <input
                  className="input is-small"
                  type="text"
                  id="spacingOfForm"
                  placeholder="name"
                  onChange={this.handleOnChange}
                  value={this.state.name}
                  name="name"
                />
              </div>
              <div id="buttonBoxes">
                <button
                  id="confirmButton"
                  onClick={this.deleteButton}
                  className="button is-danger"
                >
                  CONFIRM
                </button>
                <button
                  id="exitButton"
                  onClick={this.props.closeModal1}
                  className="button is-dark"
                >
                  EXIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProduct: name => dispatch(deleteProduct(name))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductDeleteModal);
