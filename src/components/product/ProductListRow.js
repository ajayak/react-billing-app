import React, {PropTypes} from 'react';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.left}</td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
