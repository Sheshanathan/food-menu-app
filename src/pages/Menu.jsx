import React from 'react';

const SAMPLE_MENU = [
  { id: 1, name: 'Margherita Pizza', price: 9.99 },
  { id: 2, name: 'Veggie Burger', price: 8.5 },
  { id: 3, name: 'Caesar Salad', price: 7.25 },
];

export default function Menu() {
  return (
    <div className="page menu-page">
      <h2>Menu</h2>
      <ul>
        {SAMPLE_MENU.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> — ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
