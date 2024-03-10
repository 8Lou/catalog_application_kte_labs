import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

const One = () => {
  const [users, setUsers] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  // const goToAddItemPage = () => {
  //   navigate("/add-item");
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, pokemonResponse] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/users"),
          axios.get("https://pokeapi.co/api/v2/pokemon/25"),
        ]);

        setUsers(usersResponse.data);
        setPokemon(pokemonResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }

      const pokemonListResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon"
      );
      setPokemonList(pokemonListResponse.data.results);
    };

    fetchData();
  }, []);

  const handleAddItem = (newItem) => {
    // Добавление нового элемента в список
    const newItemData = { id: items.length + 1, name: newItem };
    setItems([...items, newItemData]);
  };

  return (
    <div className="list-main">
      <div className="list-container">
        <h2>Items</h2>
        <Link to="/two">
          <ul className="list">
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </Link>

        <h2>Pokemon List</h2>
        {pokemonList.length > 0 ? (
          <ul className="list">
            {pokemonList.map((pokemon) => (
              <li key={pokemon.name}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading Pokemon...</p>
        )}

        <Link to="/add-item">
          <button>Аdd a new item</button>
        </Link>
      </div>
    </div>
  );
};

export default One;
