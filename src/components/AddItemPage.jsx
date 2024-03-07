import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddItemPage = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    onAddItem(newItem);
    setNewItem("");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Add New Item to the List</h1>
      <input type="text" value={newItem} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default AddItemPage;
