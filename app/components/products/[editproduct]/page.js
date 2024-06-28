"use client";
import { Imprima } from "next/font/google";
import "../../../style.css";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const page = (props) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    getProductdetail();
  }, []);

  const getProductdetail = async () => {
    let productData = await fetch(
      "http://localhost:3001/api/products/" + props.params.editproduct
    );
    productData = await productData.json();
    const data = productData.result;

    if (productData.success) {
      setName(data.name);
      setPrice(data.price);
      setColor(data.color);
      setCompany(data.company);
    }
  };

  const updateProductData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/api/products/" + props.params.editproduct,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, price, color, company }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to updat product");
      }

      const result = await response.json();

      if (result.success) {
        alert(" Product Successfully Updated");
        router.push('/components/products');
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
      <h1 className="top-heading">Update product</h1>
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
      <button className="btn" onClick={updateProductData}>
        Update Product
      </button>
    </div>
  );
};

export default page;
