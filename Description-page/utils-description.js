export const descripcionProductos = async () => {
    const response = await fetch ("https://raw.githubusercontent.com/Dxnrojas/updateLanding/main/Parcial-I/data.json");
    const data = await response.json();
    return data.data;
};