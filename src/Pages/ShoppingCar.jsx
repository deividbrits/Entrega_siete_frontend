import React, { useState } from 'react';
import ProductList from '../components/Cart/ShoppingCartItem'
import Cart from '../../src/components/Cart/OrderSummaryItem'
import './Shoppingcart.css'
import { Typography } from '@mui/material';



const ShoppingCar = () => {
  
  const [products] = useState([
    { id: 1, nombre: 'One Piece', precio: 12000 },
    { id: 2, nombre: 'Akame Ga Kill', precio: 10000 },
    { id: 3, nombre: 'Fairy Tail', precio: 10000 },
  ]);

  
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item !== product));
  };

  return (
    <div className='shopping-cart-container'>
    <Typography variant='h1'sx={{color : '#872d16'}} >Mi Carro de Compras</Typography>
      <div className='cart-content'>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default ShoppingCar
