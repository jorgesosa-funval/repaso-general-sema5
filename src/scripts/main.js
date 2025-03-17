import { characters } from "./data.js";
import { loadCharacters } from "./utils.js";

const characterList = document.querySelector('#character-list');
 
loadCharacters(characters, characterList)

