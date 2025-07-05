import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:4000/api/product");
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/product/${id}`);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleSubmit = async (data) => {
    if (editingProduct) {
      await axios.put(`http://localhost:4000/api/product/${editingProduct._id}`, data);
    } else {
      await axios.post("http://localhost:4000/api/product", data);
    }
    setEditingProduct(null);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Pagination Logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="container">
      
      <h1>🛒 Street food Manager</h1>
      <ProductForm onSubmit={handleSubmit} product={editingProduct} />
      <ProductList
        products={currentProducts}
        onDelete={handleDelete}
        onEdit={handleEdit}
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        productsPerPage={productsPerPage}
      />
    </div>
  );
};

export default App;
