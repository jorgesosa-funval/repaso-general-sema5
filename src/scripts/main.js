import { characters } from "./data.js";
import { loadCharacters, activeButton, searchCharacter } from "./utils.js";

// nodos html
const characterList = document.querySelector('#character-list');
const filterButtons = document.querySelector('#filter-buttons');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const loadMore = document.querySelector('#load-more');
let limit = 5

loadCharacters(characters.slice(0, limit), characterList);


filterButtons.addEventListener('click', (event) => {
    let target = event.target; // elemento sobre el cual el usuario hizo click
    let tagName = target.tagName // nombre de la etiqueta precionada por el usuario
    if (tagName === 'BUTTON') { // validacion para verficar que usuario haya hecho click sobre un boton.
        let data = characters;
        if (target.value !== 'all') {
            data = characters.filter(personaje => personaje.status.toLocaleLowerCase() === target.value.toLocaleLowerCase())
        }
        loadCharacters(data, characterList)
        activeButton(target)
    }
})

searchButton.addEventListener('click', (e) => {
    searchCharacter(searchInput, characters, characterList)
})

loadMore.addEventListener('click', () => {
    limit += 5;
    loadCharacters(characters.slice(0, limit), characterList);
    if (limit === characters.length) {
        loadMore.remove();
    }
})