import { obtenerProductos, panaderia } from "./utils.js";

const render = async () => {

    const data = await obtenerProductos();

    const campo1 = document.querySelector('#campo1');

    for (const producto of data.panaderia){
        const Panaderia = new panaderia(
            producto.id,
            producto.img,
            producto.name,
            producto.price,
            producto.nodo
        );
        const productoRender = Panaderia.render();

        campo1.appendChild(productoRender);
    };
};

document.addEventListener('DOMContentLoaded', render);