import { Button, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <Typography variant="h2" sx={{color : '#f9f9f9'}}>Mis Productos</Typography>
      <ul>
        {products.map((product) => (
          <ListItem sx={{fontSize : 30}} key={product.id}>
            <ListItemText sx={{fontSize : 30}} primary={product.nombre} secondary={`${product.precio}`} />
  
            <Button variant="contained" color="primary" onClick={() => addToCart(product)}>Agregar al carro</Button>
            </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

