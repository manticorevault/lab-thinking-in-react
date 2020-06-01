import React from 'react';
import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>Name</tr>
        <tr>Price</tr>
      </thead>
      {props.products.map((product) => (
        <ProductRow
          {...product}
          // You can also do it by spreading
          /*name={product.name}
          price={product.price}
          stocked={product.stocked}
          category={product.category}
          */
        />
      ))}
    </table>
  );
}

export default ProductTable;
