import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AddItemForm = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    // Обработка отправки формы
    console.log("Form values:", values);
  };

  return (
    <Formik
      initialValues={{ name: "" }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name:</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AddItemForm;
