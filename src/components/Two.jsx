import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import pokemonImg from "../img/pokemon.jpg";

const Two = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <img src={pokemonImg} alt="Pokemon" />

      <h2>List of Pokemons</h2>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>

      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Two;
