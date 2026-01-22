import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  let [reload, setReload] = useState(0);

  useEffect(() => {
    console.log("🤔 reload:", reload);

    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [reload]);
  return (
    <main>
      <button type="button" onClick={() => setReload(reload + 1)}>
        Load Pokémon
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
