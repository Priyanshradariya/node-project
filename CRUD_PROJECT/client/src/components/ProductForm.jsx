import React, { useEffect, useState } from "react";

const ProductForm = ({ onSubmit, product }) => {
  const [form, setForm] = useState({ name: "", price: "",quantity:"" });

  useEffect(() => {
    if (product) {
      setForm({ name: product.name, price: product.price, quantity:product.quantity});
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    onSubmit(form);
    setForm({ name: "", price: "" ,quantity:""});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} placeholder="Product Name" onChange={handleChange} />
      <input type="number" name="price" value={form.price} placeholder="Price" onChange={handleChange} />
      <input type="number" name="quantity" value={form.quntity} placeholder="Qty" onChange={handleChange} />
      <button type="submit">{product ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default ProductForm;
