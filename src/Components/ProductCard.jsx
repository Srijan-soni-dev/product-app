import React from "react";

 export default function ProductCard({ products }) {
  return (
    <div className="card-grid">
      {products.map(p => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>{p.category}</p>
          <p>Stock: {p.stock}</p>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

