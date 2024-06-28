"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Userdelete from "../util/userdelete";

export default function Users() {
  const [usersList, setUsersList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch("http://localhost:3001/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const userData = await response.json();
      setUsersList(userData);
      console.log(userData);
      setLoading(false);
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
          <h1>User List</h1>
          {usersList?.map((item) => {
            console.log(item);
            return (
              <div className="user-item">
                <span>
                  <Link
                    style={{ padding: "20px" }}
                    href={`users/${item.id}`}
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                </span>
                <span>
                  <Link href={`users/${item.id}/update`}>Edit</Link>
                </span>
                <span>
                  <Userdelete id={item.id}/>
                </span>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
