import React from "react";

const ProductList = ({ products, onDelete, onEdit, currentPage, totalPages, goToPage }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>🍽️ Name</th>
            <th>💲 Price</th>
            <th>🔢 Quantity</th>
            <th>Bill</th>
            <th>⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="6">No products found</td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr key={product._id}>
                <td>{(currentPage - 1) * 5 + index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                   {product.price * product.quantity}
                </td>
                <td className="btns">
                  <button onClick={() => onEdit(product)}>✏️ Edit</button>
                  <button onClick={() => onDelete(product._id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          «
        </button>
        <span style={{ margin: "0 1rem" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          »
        </button>
      </div>
    </>
  );
};

export default ProductList;
