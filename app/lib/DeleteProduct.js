import { resolve } from "path";

const DeleteProduct = ({ id, Productslist }) => {
  const deleteRecord = async () => {
    let response = await fetch("http://localhost:3001/api/products/" + id, {
      method: "delete",
    });
    response = await response.json();
    if (response.success) {
      alert("Product deleted");
      Productslist();
    }
  };

  return (
    <button onClick={deleteRecord} className="ml-5 text-red-600">
      Delete
    </button>
  );
};

export default DeleteProduct;
