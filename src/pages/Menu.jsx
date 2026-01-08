import "../styles.css";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


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

  // ADD ITEM
  const addToCart = (food) => {
    const exists = cart.find(item => item.id === food.id);

    if (exists) {
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

  // INCREASE
  const increase = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE
  const decrease = (id) => {
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

  // REMOVE
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // TOTAL
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // PLACE ORDER
  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    if (!location) {
      alert("Please enter delivery location!");
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        items: cart,
        total: totalAmount,
        location: location,
        createdAt: serverTimestamp(),
      });

      alert("Order placed successfully!");
      setCart([]);
      setLocation("");
    } catch (err) {
      alert("Error placing order: " + err.message);
    }
  };

  return (
    <div className="container">
      <div className="card">

        {/* MENU SECTION */}
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

        {/* CART SECTION */}
        <h2>Cart 🛒</h2>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(item => (
  <div key={item.id} className="cart-item">
    <div>
      <strong>{item.name}</strong>
      <br />
      ₹{item.price}
    </div>

    <div className="cart-controls">
      <button onClick={() => decrease(item.id)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => increase(item.id)}>+</button>
      <button
        className="remove-btn"
        onClick={() => removeItem(item.id)}
      >
        Remove
      </button>
    </div>
  </div>
))}


        <h3>Total Amount: ₹{totalAmount}</h3>

        <input
          placeholder="Enter delivery location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          style={{ marginTop: "10px" }}
          onClick={placeOrder}
          disabled={!location || cart.length === 0}
        >
          Place Order
        </button>

      </div>
    </div>
  );
}

export default Menu;
