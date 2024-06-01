function getPokemnoByName(name: string): void {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  console.log(url);
  fetch(url).then(async(response)=>{
    const data:any =await response.json();
    console.log("my response ", data);
  })
}

getPokemnoByName("pikachu");
