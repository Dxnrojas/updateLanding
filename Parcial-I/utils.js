export const obtenerProductos = async () => {
    const response = await fetch ("https://raw.githubusercontent.com/Dxnrojas/updateLanding/main/Parcial-I/data.json");
    const data = await response.json();
    return data;
};

export class panaderia{
    #id;
    img;
    name;
    price;
    #nodo;

    constructor(id, img, name, price) {
        this.#id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        //this.#nodo = nodo;
    }

    render(){
        const block = document.createElement('div');
        block.classList.add('block');

        const block__innerblocks = document.createElement('div');
        block__innerblocks.classList.add('block__innerblocks');
        block.appendChild(block__innerblocks);

        const imgBlockInnerblocks = document.createElement('img');
        imgBlockInnerblocks.src = this.img;
        imgBlockInnerblocks.alt = this.name;
        block__innerblocks.appendChild(imgBlockInnerblocks);

        return block;
    }
}

//Esto es una prueba de un commit