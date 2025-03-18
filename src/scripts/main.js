import { characters } from "./data.js";
import { loadCharacters, activeButton } from "./utils.js";
// nodos html
const characterList = document.querySelector('#character-list');
const filterButtons = document.querySelector('#filter-buttons');

loadCharacters(characters, characterList);


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
