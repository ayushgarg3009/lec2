// const resultFromFetch = fetch("https://pokeapi.co/api/v2/pokemon/1");
// console.log(resultFromFetch);

// fetch("https://pokeapi.co/api/v2/pokemon/1")
// .then(function (resultFromFetch) {
//     console.log(resultFromFetch);
// })


// DOM Objects
const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const pokeListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

console.log(pokeName);
console.log(pokeListItems);

//constants and variables
const TYPES = [
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
  ];
  let prevUrl = null;
  let nextUrl = null;
  
  
  // Functions
  const capitalize = (str) => str[0].toUpperCase() + str.substr(1);
  
  const resetScreen = () => {
    mainScreen.classList.remove('hide');
    for (const type of TYPES) {
      mainScreen.classList.remove(type);
    }
  };

const fetchPokeList = url => {
    // get data for right side of screen
    // fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        // const results = data['results'];
        const { results,previous,next } = data;
        prevUrl = previous;
        nextUrl = next;

        // console.log(results);

        for(let i=0;i<pokeListItems.length; i++){
            const pokeListItem = pokeListItems[i];
            const resultData = results[i];
            const { name } = resultData;

            if(resultData) {
                const { name,url } = resultData;
                const urlArray = url.split('/');
                // console.log(urlArray);
                const id = urlArray[urlArray.length-2];
                pokeListItem.textContent = id + '.' + capitalize(name);
            } else {
                pokeListItem.textContent = '';
            }
        }
    });
};

const fetchPokeData = id => {
    // get data for left side of screen
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        console.log(data['name']);
        // console.log(data.name);

        resetScreen();

        const dataTypes = data['types'];
        const dataFirstType = dataTypes[0];
        const dataSecondType = dataTypes[1];
        pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
        if(dataSecondType){
            pokeTypeTwo.classList.remove('hide');
            pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
        } else {
            pokeTypeTwo.classList.add('hide');
            pokeTypeTwo.textContent = '';
        }
        mainScreen.classList.add(dataFirstType['type']['name']);
        // mainScreen.classList.remove('hide');

        pokeName.textContent = capitalize(data['name']);
        pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
        pokeWeight.textContent = data['weight'];
        pokeHeight.textContent = data['height'];

        pokeFrontImage.src = data['sprites']['front_default'] || '';
        pokeBackImage.src = data['sprites']['back_default'] || '';
    });
};

const handleLeftButtonClick = (e) => {
    //   console.log(e);
    if(prevUrl){
        fetchPokeList(prevUrl)
    }
  };


  const handleRightButtonClick = (e) => {
    //   console.log(e);
    if(nextUrl){
        fetchPokeList(nextUrl)
    }
  };

  const handleListItemClick = (e) => {
      console.log(e.target);
    if(!e.target){
        return;
    }
    const listItem = e.target;
    if(!listItem.textContent) return;

    console.log(listItem.textContent);
    const id = listItem.textContent.split('.')[0];
    console.log(id);
    fetchPokeData(id);
  };



// get data for left side of screen
// fetch("https://pokeapi.co/api/v2/pokemon/6")
// .then(res => res.json())
// .then(data =>{
//     console.log(data);
//     console.log(data['name']);
//     // console.log(data.name);

//     resetScreen();

//     const dataTypes = data['types'];
//     const dataFirstType = dataTypes[0];
//     const dataSecondType = dataTypes[1];
//     pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
//     if(dataSecondType){
//         pokeTypeTwo.classList.remove('hide');
//         pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
//     } else {
//         pokeTypeTwo.classList.add('hide');
//         pokeTypeTwo.textContent = '';
//     }
//     mainScreen.classList.add(dataFirstType['type']['name']);
//     // mainScreen.classList.remove('hide');

//     pokeName.textContent = capitalize(data['name']);
//     pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
//     pokeWeight.textContent = data['weight'];
//     pokeHeight.textContent = data['height'];

//     pokeFrontImage.src = data['sprites']['front_default'] || '';
//     pokeBackImage.src = data['sprites']['back_default'] || '';
// });



// adding event listeners
leftButton.addEventListener('click', handleLeftButtonClick);
rightButton.addEventListener('click', handleRightButtonClick);
for(pokeListItem of pokeListItems){
    pokeListItem.addEventListener('click', handleListItemClick);
}


// initialize App
fetchPokeList("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");