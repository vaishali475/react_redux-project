import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProductComponent extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.allProducts.products &&
          this.props.allProducts.products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image mt-5">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="content">
                      <div className="header">{product.title}</div>
                      <div className="meta price">${product.price}</div>
                      <div className="meta">{product.category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const allProducts = { allProducts: state.productReducer };

  return allProducts;
}

export default connect(mapStateToProps)(ProductComponent);
