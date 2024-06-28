"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DeleteProduct from "../../lib/DeleteProduct";

const productlist = () => {
  const [allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await fetch("http://localhost:3001/api/products", {
      cache: "no-cache",
    });
    data = await data.json();

    if (data.success) {
      setAllproducts(data.result);
      setLoading(false);
    } else {
      alert("No data found");
    }
  };

  return (
    <>
      <Link href={"/components/addproduct"}>Add product</Link>
      {loading ? (
        <p>loading........</p>
      ) : (
        <div>
          <h1>Product List</h1>
          <table className="ml-9 border w-2/5">
            <thead className="text-2xl">
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Color</td>
                <td>Company</td>
              </tr>
            </thead>
            <tbody>
              {allproducts.map((item) => (
                <tr key={item._id} className="ml-9 border">
                  <td>{item.name}</td>
                  <td className="mt-3">{item.price}</td>
                  <td>{item.color}</td>
                  <td>{item.company}</td>
                  <td>
                    <Link href={"/components/products/" + item._id}>Edit</Link>
                    <DeleteProduct id={item._id} Productslist={getProducts}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default productlist;
