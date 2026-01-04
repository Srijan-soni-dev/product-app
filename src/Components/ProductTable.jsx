import React from "react";

 export default function ProductTable({ products }) {
  return (
    <table border="1" width="100%" style={{ marginTop: "10px" }}>
      <thead>
        <tr>
          <th>Name</th><th>Price</th><th>Category</th><th>Stock</th><th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.category}</td>
            <td>{p.stock}</td>
            <td>{p.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

 