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

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <div className="card">
        <h2>Food Menu 🍽️</h2>

        {foods.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <strong>{item.name}</strong> - ₹{item.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => addToCart(item)}
            >
              Add
            </button>
          </div>
        ))}

        <hr />

        <h3>Cart 🛒</h3>

        {cart.length === 0 && <p>No items added</p>}

        {cart.map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price}
          </p>
        ))}

        <h3>Total: ₹{totalAmount}</h3>

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
