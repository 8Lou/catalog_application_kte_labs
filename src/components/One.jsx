import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const One = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <Link to="/two">
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Link>

      <Link to="/three">
        <button>Go to Three</button>
      </Link>
    </div>
  );
};

export default One;
