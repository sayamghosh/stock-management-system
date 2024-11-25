import React from "react";

function ProductCard() {
  return (
    <div className="product flex justify-between items-center p-3 rounded-lg bg-[#333334]">
      <h3>Name</h3>
      <h3>Product Id</h3>
      <h3>Price</h3>
      <h3>Quantity</h3>
    </div>
  );
}

export default ProductCard;
