async function getPokemnoByName(name: string): Promise<void> {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const dataResponse =await fetch(url);
  const pokemonData = await dataResponse.json();

  console.log(pokemonData.name);
  console.log(pokemonData.height);
  console.log(pokemonData.weight);
  console.log(pokemonData);

}

// function getPokemnoByName(name: string) {
//   const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
//   let pokemonData = {}

//   fetch(url)
//     .then((data: any) => {

//       const dataResponse = data?.json();

//       dataResponse.then((pokemon:any)=>{
        
//         pokemonData = pokemon;

//       });
//     })
// console.log(pokemonData)

// }
getPokemnoByName("pikachu");