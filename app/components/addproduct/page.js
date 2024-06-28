"use client";
import { Imprima } from "next/font/google";
import "../../style.css";
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");

  const onchange = async () => {
    console.log({ name, price, color, company });
    let result = await fetch("http://localhost:3001/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company }),
    });
    result = await result.json();
    if (result.success) {
      alert("New product successfully added");
    }
  };

  const onchange1 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, color, company }),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const result = await response.json();

      if (result.success) {
        alert("New product successfully added");
        // Optionally reset form fields or perform other actions
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Product Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Product Comapany"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="input-field"
      />
      <button className="btn" onClick={onchange}>
        Add Product
      </button>
    </div>
  );
};

export default page;
