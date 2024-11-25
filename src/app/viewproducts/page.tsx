"use client";
import ProductCard from "@/components/productheading";
import React, { useState } from "react";

function productsPage() {
  const [pid, setpid] = useState("");

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold justify-center items-center mt-4 flex justify-center">
        Products Inventory
      </h1>
      <div className="products w-[70%] mx-auto p-4 flex flex-col gap-2 overflow-y-auto max-h-[600px] border border-gray-300 rounded-lg">
        <div className="search w-full flex gap-4 px-4">
          <input
            type="text"
            value={pid}
            placeholder="Product Id "
            onChange={(e) => {
              setpid(e.target.value);
            }}
            className="text-black w-[70%] p-2 rounded-lg bg-[#333334]"
          />
          <button className="py-2 px-4 rounded-full bg-[#333334]">Search</button>
        </div>
        <div className="product flex justify-between items-center p-3 rounded-lg bg-[#333334]">
          <h3>Name</h3>
          <h3>Product Id</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
        </div>
        
      </div>
    </div>
  );
}

export default productsPage;
