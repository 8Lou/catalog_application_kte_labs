import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router";

const AddItemPage = ({ onAddItem, onUpdateList }) => {
  // const [newItem, setNewItem] = useState("");
  const navigate = useNavigate();

  // const handleInputChange = (e) => {
  //   setNewItem(e.target.value);
  // };

  // const handleAddItem = () => {
  //   onAddItem(newItem);
  //   setNewItem("");
  // };

  const handleSubmit = (values) => {
    onAddItem(values.newItem); // Передаем значение нового элемента для обработки
    navigate(-1);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Add New Item to the List</h1>
      {/* <input type="text" value={newItem} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button> */}

      <Formik initialValues={{ newItem: "" }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="newItem">New Item:</label>
          <Field type="text" id="newItem" name="newItem" />
          <ErrorMessage name="newItem" component="div" />

          <button type="submit">Add Item</button>
        </Form>
      </Formik>

      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default AddItemPage;
