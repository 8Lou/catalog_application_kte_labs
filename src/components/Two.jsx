import React from "react";
import { useNavigate } from "react-router";

const Two = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>This is Component Two</h2>
      <p>Some other content...</p>

      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Two;
