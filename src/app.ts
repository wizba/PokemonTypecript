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
  
nameParagraph.textContent = `Name: ${pokemonData.name}`;
nameContainer?.appendChild(nameParagraph);
console.log('name',nameContainer);

const weightContainer = document.getElementById("weight");
    const weightParagraph = document.createElement('p');

    weightParagraph.textContent = `Weight: ${pokemonData.weight}`;
    weightContainer?.appendChild(weightParagraph);
    console.log('weight', weightContainer);

    const heightContainer = document.getElementById("height");
    const heightParagraph = document.createElement('p');

    heightParagraph.textContent = `Height: ${pokemonData.height}`;
    heightContainer?.appendChild(heightParagraph);
    console.log('height', heightContainer);
}

getPokemnoByName("abra");