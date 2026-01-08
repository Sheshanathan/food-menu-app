import "../styles.css";

import { useState } from "react";

function Menu() {
  const foods = [
    { id: 1, name: "Chicken Biryani", price: 180 },
    { id: 2, name: "Mutton Biryani", price: 220 },
    { id: 3, name: "Veg Meals", price: 120 },
    { id: 4, name: "Chicken Fried Rice", price: 150 },
  ];

  const [cart, setCart] = useState([]);
  const [location, setLocation] = useState("");

  // ADD TO CART
  const addToCart = (food) => {
    const existingItem = cart.find(item => item.id === food.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  // INCREASE QUANTITY
  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // TOTAL AMOUNT
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="card">
        <h2>Food Menu 🍽️</h2>

        {foods.map(food => (
          <div key={food.id} style={{ marginBottom: "10px" }}>
            <strong>{food.name}</strong> - ₹{food.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => addToCart(food)}
            >
              Add
            </button>
          </div>
        ))}

        <hr />

        <h3>Cart 🛒</h3>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(item => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <strong>{item.name}</strong> - ₹{item.price} × {item.quantity}
            <br />

            <button onClick={() => decreaseQty(item.id)}>-</button>
            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}

        <h3>Total Amount: ₹{totalAmount}</h3>

        <input
          placeholder="Enter delivery location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button style={{ marginTop: "10px" }}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Menu;
