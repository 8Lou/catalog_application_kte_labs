import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router";
import "./style.scss";

const AddItemPage = ({ onAddItem, onUpdateItems }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const newItem = values.name;
    try {
      await onAddItem(newItem);
      onUpdateItems(newItem);
      navigate("/");
    } catch (error) {
      console.error("Error adding new item: ", error);
    }
  };

  return (
    <div>
      <h1>Add New Item to the List</h1>

      <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
        <Form>
          <label>Name:</label>
          <Field type="text" name="name" />
          <button type="submit">Add Item</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddItemPage;
