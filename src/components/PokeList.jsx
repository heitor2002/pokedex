import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

export default function Pokelist() {
  const { data } = useFetch("https://pokeapi.co/api/v2/pokemon/");

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="container container-grid">
        <aside>
          <div className="content-aside">
            <h2>Find your pokemon</h2>
            <input
              type="text"
              placeholder="Search pokemon"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </aside>
        <div className="container-flex">
          {data
            .filter((term) => {
              if (searchTerm == "") {
                return term;
              } else if (
                term.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return term;
              }
            })
            .map((pokemon) => {
              const sprites = pokemon.sprites.front_default;

              const widthXpBar = (pokemon.base_experience * 100) / 500;

              const pokemonAbilities = pokemon.abilities.map(
                (item) => item.ability.name
              );

              return (
                <div key={pokemon.id} className="card">
                  <h2>{pokemon.name.toUpperCase()}</h2>
                  <img src={sprites} alt={pokemon.name} />
                  <div className="card-description">
                    <h3>Base experience</h3>
                    <div className="bar-experience">
                      <div className="xp-number">{pokemon.base_experience}</div>
                      <div
                        className="xp"
                        style={{
                          width: `${widthXpBar}%`,
                          backgroundColor: `rgb(100, 255, ${
                            pokemon.base_experience / 2
                          })`,
                        }}
                      ></div>
                    </div>
                    <div className="abilities">
                      <h3>Abilities</h3>
                      <h5>{pokemonAbilities.join(" | ")}</h5>
                    </div>
                  </div>
                  <Link to={"/pokemon/" + pokemon.id} className="card-link">
                    Show more
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
