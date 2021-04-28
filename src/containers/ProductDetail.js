import React from "react";
import axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const productId = this.props.match.params.productId;
    console.log(productId);
    if (productId && productId !== "") {
      this.fetchProductDetail(productId);
    }

    this.props.removeSelectedProduct();
  }
  fetchProductDetail = async (productId) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });

    this.props.selectedProduct(response.data);
  };

  render() {
    // const {
    //   image,
    //   category,
    //   price,
    //   title,
    //   description,
    // } = this.props.selectedProductReducer.product;
    return (
      <div className="ui grid container">
        {Object.keys(this.props.selectedProductReducer).length === 0 ? (
          <div className="mt-5">...Loading</div>
        ) : (
          <div className="ui placeholder segment mt-2">
            <div className="">
              <img
                className="fluid image mt-3"
                src={this.props.selectedProductReducer.product.image}
              />
            </div>

            <h1>{this.props.selectedProductReducer.product.title}</h1>
            <h2>
              <a className="ui teal tag label">
                ${this.props.selectedProductReducer.product.price}
              </a>
            </h2>
            <h3 className="ui brown block header">
              {this.props.selectedProductReducer.product.category}
            </h3>
            <p>{this.props.selectedProductReducer.product.description}</p>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to cart</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   const Product = { allProducts: state.selectedProductReducer };
//   console.log(Product);
//   return Product;
// }
function mapStateToProps(state) {
  console.log(state.selectedProductReducer);
  return {
    selectedProductReducer: state.selectedProductReducer,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     selectedProduct,
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectedProduct: selectedProduct,
      removeSelectedProduct: removeSelectedProduct,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
