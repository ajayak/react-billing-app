import React, {PropTypes} from 'react';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td>{product.Name}</td>
      <td>{product.Category}</td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
