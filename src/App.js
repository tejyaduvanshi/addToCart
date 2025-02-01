import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="main">

      <div className="container">
        
  <button className="cart-toggle" onClick={() => setShowCart(!showCart)}>
    <i className={showCart ? "ri-arrow-left-line" : "ri-shopping-cart-2-line"}></i> {}
    {showCart ? "View Products" : "View Cart"}
  </button>
  {showCart ? <Cart /> : <ProductList />}
</div>


      </div>
    </CartProvider>
  );
};

export default App;
