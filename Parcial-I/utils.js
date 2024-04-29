export const productos = async () => {
    const response = await fetch ("data.json");
    const data = await response.json();
    return data;
};

//Esto es una prueba de un commit