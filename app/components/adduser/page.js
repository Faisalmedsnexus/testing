"use client";
import { useState } from "react";
import "./../../style.css";
export default function Page() {
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3001/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.success) {
      alert("new user added");
    } else {
      alert("some error with data please check and try again");
    }
  };
  return (
    <div className="add-user">
      <h4>Add New User</h4>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setname(e.target.value)}
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
      <button onClick={addUser} className="btn">
        Add User
      </button>
    </div>
  );
}
