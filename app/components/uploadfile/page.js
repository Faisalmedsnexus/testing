"use client";
import React, { useState } from "react";

const Page = () => {
  const [file, setFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please choose a file first");
      return;
    }

    const data = new FormData();
    data.set("file", file);

    let result = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    result = await result.json();
    if (result.success) {
      alert("File uploaded successfully");
    } else {
      alert("File upload failed");
    }
  };

  return (
    <div>
      <h1>Choose file</h1>
      <form onSubmit={onSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default Page;


