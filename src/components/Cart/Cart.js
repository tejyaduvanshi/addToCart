import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : null}

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div  className="nameprice">
              <h3>{item.title}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
           
            <div>
              <button
                onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
              >
                -
              </button>
              <button
                onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
              >
                +
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
                  alert("Product removed from cart!");
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
