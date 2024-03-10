import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

const Three = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>This is Component Three</h2>
      <p>More content goes here...</p>

      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Three;
