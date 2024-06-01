async function getPokemnoByName(name: string): Promise<void> {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const dataResponse =await fetch(url);
  const pokemonData = await dataResponse.json();

}

getPokemnoByName("pikachu");
