"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import "./../../../../style.css";

const page = ({ params }) => {
  let id = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getuserdetail();
  }, []);
  const getuserdetail = async () => {
    let respone = await fetch("http://localhost:3001/api/users/" + id);
    const data = await respone.json();

    if (data.success) {
      const firstUser = data.result.length > 0 ? data.result[0] : null;
      setName(firstUser.name);
      setAge(firstUser.age);
      setEmail(firstUser.id);
    }
  };

  const updateUser = async () => {
    let result = await fetch("http://localhost:3001/api/users/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result.success) {
      alert("user information updated");
    } else {
      alert("please try with valid input");
    }
  };

  return (
    <div className="add-user">
      <h4>Update User</h4>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <button onClick={updateUser} className="btn">
        Update User
      </button>
    </div>
  );
};

export default page;
