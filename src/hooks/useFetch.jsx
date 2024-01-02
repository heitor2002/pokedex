import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const fetchPokemon = async (url) => {
    const arrayPokemon = [];

    for (let i = 1; i <= 20; i++) {
      const response = await fetch(url + i);
      const json = await response.json();
      arrayPokemon.push(json);
    }

    setData(arrayPokemon);
  };

  useEffect(() => {
    fetchPokemon(url);
  }, [url]);

  return { data };
}
