"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUsers();
    console.log(userdata);
    setLoading(false)
  }, []);

  async function fetchUsers() {
    console.log("function call");
    const id = params.userid;
    try {
      const response = await fetch(`http://localhost:3001/api/users/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUserdata(data.result);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <p>loading........</p>
      ) : (
        <ul>
          {userdata?.map((item) => {
            console.log(item);
            return (
              <Link
                style={{ padding: "20px" }}
                href={`users/${item.id}`}
                key={item.id}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default page;
