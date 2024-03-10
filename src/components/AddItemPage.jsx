import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router";

const AddItemPage = ({ onAddItem, onUpdateItems }) => {
  // const [newItem, setNewItem] = useState("");
  const navigate = useNavigate();

  // const handleInputChange = (e) => {
  //   setNewItem(e.target.value);
  // };

  // const handleAddItem = () => {
  //   onAddItem(newItem);
  //   setNewItem("");
  // };

  // Передаем значение нового элемента для обработки
  const handleSubmit = async (values) => {
    const newItem = values.name;
    try {
      // Пытаемся добавить новый элемент
      await onAddItem(newItem);
      onUpdateItems(newItem);
      navigate("/");
    } catch (error) {
      console.error("Error adding new item: ", error);
      // Обработка ошибок, если добавление элемента завершилось неуспешно
    }
  };

  // const goBack = () => {
  //   navigate(-1);
  // };

  return (
    <div>
      <h1>Add New Item to the List</h1>
      {/* <input type="text" value={newItem} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button> */}

      <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
        <Form>
          <label>Name:</label>
          <Field type="text" name="name" />
          <button type="submit">Add Item</button>
        </Form>
      </Formik>
      {/* <button onClick={goBack}>Go back</button> */}
    </div>
  );
};

export default AddItemPage;
