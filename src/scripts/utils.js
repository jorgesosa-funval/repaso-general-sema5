/**
 * @description Se encargar de iterar   todos los elementos en el array y agregarlos al DOM.
 * @param {Array} array 
 * @param {Node} elementHTML 
 */
export function loadCharacters(array, elementHTML) {
    elementHTML.innerHTML = ""
   
    array.forEach(function (item) { 
        const template = characterTemplate(item.image, item.name, item.status, item.species, item.location.name);
        
        elementHTML.innerHTML += template;
    });
}


/**
 * @description Template a modo de componente para mostrar los characters en el DOM.
 * @param {String} img 
 * @param {String} name 
 * @param {String} status 
 * @param {String} species 
 * @param {String} location 
 */
export function characterTemplate(img, name, status, species, location) {
    const template = `
        <li class="flex flex-col bg-slate-900 rounded-lg shadow-md overflow-hidden w-full pb-4 sm:flex-row sm:h-60 sm:pb-0">

            <img src="${img}" alt="${name}" class="w-full object-cover sm:w-1/2">

            <div aria-label="card content" class="text-white p-2 flex flex-col gap-4">
                <h3 class="text-xl font-semibold">${name}</h3>
                <p class="relative before:absolute before:size-2 before:bg-gray-300 ml-4 before:-left-4 before:top-2.5 before:rounded-full">
                    <span>${status}</span> - <span>${species}</span>
                </p>

                 <p>
                    <span class="text-gray-600 font-bold">Last known Location:</span>
                    <br>
                    ${location}
                </p>
            </div>
        </li>
    `;
    return template;
}