import React, { useEffect, useRef } from 'react'

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.precio, 0);
  const formattedTotalPrice = totalPrice > 0 ? totalPrice.toFixed(2) : "0.00"
  const paypalRef = useRef();

  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Compra de Mangas",
                amount: {
                  currency_code: "MXN", 
                  value: formattedTotalPrice,
              },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
        
          });
        },
        onError: (err) => {
          console.error('Error in PayPal transaction', err);
        },
      }).render(paypalRef.current);
    }
  }, [formattedTotalPrice]);
 

  return (
    <div>
      <h2>Mis Pedidos</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total : ${totalPrice}</h3>

      <div ref={paypalRef}></div>
    </div>
  );
};

export default Cart;
