import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.fetchProducts();
  }
  fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response);
    this.props.setProducts(response.data);
  };
  render() {
    return (
      <div>
        <ProductComponent />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const Products = { allProducts: state.productReducer };
  console.log(Products);
  return Products;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setProducts: setProducts }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
