import React, { useState, useEffect } from "react";
import ProductTable from "./Components/ProductTable";
import ProductCard from "./Components/ProductCard";
import ProductForm from "./Components/ProductForm";
import Pagination from "./Components/Pagination";


export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics", stock: 10, description: "High performance" },
    { id: 2, name: "Shoes", price: 2000, category: "Fashion", stock: 50, description: "Comfortable running shoes" },
    { id: 3, name: "Book", price: 500, category: "Education", stock: 100, description: "Knowledge booster" }
  ]);

  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredProducts(
        products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setCurrentPage(0);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm, products]);

  const paginatedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Management</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      {/* Toggle View */}
      <div>
        <button onClick={() => setView("list")}>List View</button>
        <button onClick={() => setView("card")}>Card View</button>
      </div>

      {/* Product Display */}
      {view === "list" ? (
        <ProductTable products={paginatedProducts} onEdit={handleEditProduct} />
      ) : (
        <ProductCard products={paginatedProducts} onEdit={handleEditProduct} />
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {/* Add Product Form */}
      <h2>Add Product</h2>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
}