import { descripcionProductos } from "./utils-description.js";

const render = async () => {

const descripcionProductos = await descripcionProductos()
console.log(descripcionProductos);

const personajes = document.getElementById("campo4");
// personajes.classList.add("contenedor")

descripcionProductos.forEach(producto => {
    const cardProducto = document.createElement ("article");
    cardProducto.classList.add("article");

    const icon = document.createElement('img');
    icon.src = personaje.displayIcon;

    const name = document.createElement('h2');
    name.textContent = personaje.displayName;
    name.classList.add("title");

    const description = document.createElement('p');
    description.textContent = personaje.description;
    description.classList.add("parrafo");


    cardProducto.appendChild(icon);
    cardProducto.appendChild(name);
    cardProducto.appendChild(description);
    
    personajes.appendChild(cardProducto);

    boton.addEventListener('click', () => {
        localStorage.setItem('selectedCharacter', JSON.stringify(producto));
        window.location.href = `./character-details.html?name=${producto.displayName}`
        console.log(producto)
    })
});

}

document.addEventListener("DOMContentLoaded", render);