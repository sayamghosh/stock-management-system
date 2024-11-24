"use client";
import React, { use, useEffect, useState } from "react";

function page() {

  const [product, setProduct] = useState({
    name: "",
    productId: "",
    price: "",
    quantity: "",
  });

  // useEffect(() => {}, [product]);

  async function handleSubmit(event:any) {
    event.preventDefault(); // Stop form reload
    try {
      const response = await fetch("api/addnewproduct", {
        method: "POST",
        body: JSON.stringify(product),
      });
      console.log("Form submitted in React!");
      //Clear form
      setProduct({
        name: "",
        productId: "",
        price: "",
        quantity: "",
      }); 
    } catch (error) {
      console.log("Error while submitting form in React!");
    }
  }

  return (
    <>
      <div className="w-1/2 mx-auto">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        <form className="flex flex-col gap-2" autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="text-black"
            required
            value={product.name}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
          <label htmlFor="productId">Product Id</label>
          <input type="text" id="productId" name="productId" className="text-black" required value={product.productId} onChange={(e)=>{setProduct({...product,productId:e.target.value})}} />
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" className="text-black" required value={product.price} onChange={(e)=>{setProduct({...product,price:e.target.value})}} />
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" className="text-black" required value={product.quantity} onChange={(e)=>{setProduct({...product,quantity:e.target.value})}} />
          <button type="submit" onClick={() => {console.log(product)}}>
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default page;
