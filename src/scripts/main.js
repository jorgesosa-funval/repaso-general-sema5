import { characters } from "./data.js";
import { loadCharacters } from "./utils.js";
// nodos html
const characterList = document.querySelector('#character-list');
const filterButtons = document.querySelector('#filter-buttons')

// const allBtn = document.querySelector('#all')
// const aliveBtn = document.querySelector('#alive')
// const deathBtn = document.querySelector('#death')
// const unknownBtn = document.querySelector('#unknown') 

loadCharacters(characters, characterList)


// allBtn.addEventListener('click', ()=>{
//     loadCharacters(characters, characterList)
// })
// aliveBtn.addEventListener('click', ()=>{
//     const aliveCharacters = characters.filter(personaje => personaje.status === 'Alive')
//     loadCharacters(aliveCharacters, characterList)
// })
// deathBtn.addEventListener('click', ()=>{
//     const aliveCharacters = characters.filter(personaje => personaje.status === 'Dead')
//     loadCharacters(aliveCharacters, characterList)
// })
// unknownBtn.addEventListener('click', ()=>{
//     const aliveCharacters = characters.filter(personaje => personaje.status === 'unknown')
//     loadCharacters(aliveCharacters, characterList)
// })

// filterButtons.forEach(button => { 
//     button.addEventListener('click', () => {
//         let data = characters;
//         if (button.value !== 'all') {
//             data = characters.filter(personaje => personaje.status.toLocaleLowerCase() === button.value.toLocaleLowerCase())
//         }
//         loadCharacters(data, characterList)
//     })
// })

filterButtons.addEventListener('click', (event) => {
    let target = event.target; // elemento sobre el cual el usuario hizo click
    let tagName = target.tagName // nombre de la etiqueta precionada por el usuario
    if (tagName === 'BUTTON') { // validacion para verficar que usuario haya hecho click sobre un boton.
        let data = characters;
        if (target.value !== 'all') {
            data = characters.filter(personaje => personaje.status.toLocaleLowerCase() === target.value.toLocaleLowerCase())
        } 
        loadCharacters(data, characterList)
    }
})