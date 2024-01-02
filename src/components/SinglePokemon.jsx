import { useParams } from "react-router-dom";
import fetchSinglePokemon from "../hooks/fetchSinglePokemon";
import StatusBar from "./StatusBar";

export default function SinglePokemon() {
  const { id } = useParams();

  const { data } = fetchSinglePokemon("https://pokeapi.co/api/v2/pokemon/", id);

  console.log(data);

  return (
    <div>
      <div className="container">
        <div style={{ padding: "20px 0" }}>
          <div className="flex-single-page">
            <div className="card">
              <h2>{data.name?.toUpperCase()}</h2>
              <img src={data.sprites?.front_default} alt="" />
            </div>
            <div>
              <h2>Pokemon: {data.name?.toUpperCase()}</h2>
              <div className="abilities">
                <h3>Abilities:</h3>
                <ul className="abilities-list">
                  {data.abilities?.map((pokemon) => {
                    return (
                      <li key={pokemon.ability.name}>{pokemon.ability.name}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="pokemon-description-single-page">
            <div className="card-description">
              <h3>
                Height: <span>{data.height}</span>
              </h3>
              <hr />
              <h3>
                Species: <span>{data.species?.name}</span>
              </h3>
              <hr />
              <div className="bars">
                <StatusBar
                  bar={data.base_experience}
                  title={"Base experience"}
                  middleBar={500}
                />
                {data.stats?.map((stat) => {
                  return (
                    <StatusBar
                      bar={stat.base_stat}
                      title={stat.stat.name}
                      key={stat.stat.name}
                      middleBar={150}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
