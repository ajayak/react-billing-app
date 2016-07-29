import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';

const ProductList = ({products}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {products.map(product =>
        <ProductListRow key={product.id} product={product}/>
      )}
      </tbody>
    </table>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
