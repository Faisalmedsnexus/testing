import React from "react";

const userdelete = (props) => {
  const userId = props.id;
  console.log(userId);
  const deleteuser = async () => {
    let result = await fetch("http://localhost:3001/api/users/" + userId, {
      method: "delete",
    });
    result = await result.json();
    if (result.success) {
      alert("User is deleted");
    }
  };
  console.log("delete function");
  return (
    <div>
      <button onClick={deleteuser}>Delete</button>
    </div>
  );
};

export default userdelete;
