import { productos } from "./utils.js";

const render = async () => {
const infoProductos = await productos();
console.log(infoProductos);

}