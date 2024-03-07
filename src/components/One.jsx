import React from "react";
import { Link } from "react-router-dom";

const One = () => {
  return (
    <div>
      <h2>This is Component One</h2>
      <p>Some content here...</p>

      <Link to="/two">
        <button>Go to Two</button>
      </Link>

      <Link to="/three">
        <button>Go to Three</button>
      </Link>
    </div>
  );
};

export default One;
