import "../styles.css";

import { useState } from "react";

function Menu() {
  const foods = [
    { id: 1, name: "Chicken Biryani", price: 180 },
    { id: 2, name: "Mutton Biryani", price: 220 },
    { id: 3, name: "Veg Meals", price: 120 },
    { id: 4, name: "Chicken Fried Rice", price: 150 },
  ];

  const [cart, setCart] = useState({});
  const [location, setLocation] = useState("");

  const addItem = (food) => {
    setCart(prev => ({
      ...prev,
      [food.id]: prev[food.id]
        ? { ...prev[food.id], quantity: prev[food.id].quantity + 1 }
        : { ...food, quantity: 1 }
    }));
  };

  const removeItem = (id) => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    setCart(updatedCart);
  };

  const decreaseItem = (id) => {
    if (cart[id].quantity === 1) {
      removeItem(id);
    } else {
      setCart(prev => ({
        ...prev,
        [id]: { ...prev[id], quantity: prev[id].quantity - 1 }
      }));
    }
  };

  const totalAmount = Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="card">
        <h2>Food Menu 🍽️</h2>

        {foods.map(food => {
          const item = cart[food.id];

          return (
            <div
              key={food.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px"
              }}
            >
              <div>
                <strong>{food.name}</strong>
                <br />
                ₹{food.price}
              </div>

              <div>
                {!item ? (
                  <button onClick={() => addItem(food)}>Add</button>
                ) : (
                  <>
                    <button onClick={() => decreaseItem(food.id)}>-</button>
                    <span style={{ margin: "0 8px" }}>
                      {item.quantity}
                    </span>
                    <button onClick={() => addItem(food)}>+</button>
                    <button onClick={() => removeItem(food.id)}>
                      Remove
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}

        <hr />

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

 