import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Mis Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nombre} - ${product.precio}
            <button onClick={() => addToCart(product)}>Agregar al carro</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

