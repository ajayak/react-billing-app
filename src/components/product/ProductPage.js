import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ProductList from './ProductList';

export const ProductPage = ({products}) => {
  return <ProductList products={products}/>;
};

ProductPage.propTypes = {
  products: PropTypes.array.isRequired
};

function mapStateToProps({products}) {
  return {
    products
  };
}

export default connect(
  mapStateToProps
)(ProductPage);
