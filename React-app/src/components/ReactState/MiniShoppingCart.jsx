import { useState } from "react";

function MiniShoppingCart() {
  const products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Headphones", price: 5000 },
    { id: 3, name: "Keyboard", price: 3000 },
  ];
  const [cart, setCart] = useState([]);

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
);

  function AddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function RemoveFromCart(productID) {
    setCart((prevCart) => prevCart.filter((item) => productID !== item.id));
  }

  return (
    <div>
      <h3>products</h3>
      {products.map((product) => (
        <div style={{ display: "inline" }} key={product.id}>
          <h5>{product.name}</h5>
          <h5>{product.price}</h5>
          <button onClick={() => AddToCart(product)}>Add to cart</button>
        </div>
      ))}
      <h3>your cart</h3>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item) => (
        <div style={{ display: "inline" }} key={item.id}>
          <h5>{item.name}</h5>
          <h5>{item.price}</h5>
          <button onClick={() => RemoveFromCart(item.id)}>
            Remove from cart
          </button>
        </div>
      ))}

        <h3>cart Total: {total}</h3>
    </div>
  );
}

export default MiniShoppingCart;
