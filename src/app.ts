async function getPokemnoByName(name: string): Promise<void> {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const dataResponse =await fetch(url);
  const pokemonData = await dataResponse.json();

  console.log(pokemonData.name);
  console.log(pokemonData.height);
  console.log(pokemonData.weight);
  console.log(pokemonData);

  const imgContainer = document.getElementById("img-holder"); // get container element that is gonna hold the image
  const imgTag = document.createElement('img'); // create an image element

  imgTag.src=pokemonData.sprites.other.dream_world.front_default; // add an image from api to src of the new image element
  imgTag.classList.add("house-img"); // add a class to the image 

  imgContainer?.appendChild(imgTag) // add the image element to the image conatainer

  console.log('imgTag ',imgTag);

const nameContainer =document.getElementById("details");
  const nameParagraph = document.createElement('p');
  
nameParagraph.textContent = pokemonData.name;
nameContainer?.appendChild(nameParagraph);


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
getPokemnoByName("abra");