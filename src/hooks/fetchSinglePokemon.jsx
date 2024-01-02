import { useEffect, useState } from "react";

export default function fetchSinglePokemon(url, id) {
  const [data, setData] = useState([]);

  const fetchPokemon = async (url, id) => {
    
      const response = await fetch(url + id);
      const json = await response.json();

    setData(json);
  };

  useEffect(() => {
    fetchPokemon(url, id);
  }, [url, id]);

  return { data };
}
