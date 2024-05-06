document.addEventListener('DOMContentLoaded', () => {

    const prodcuctos =JSON.parse(localStorage.getItem('selectedCharacter'));

    console.log(prodcuctos)

    const productosDescriptionContainer = document.getElementById('productos-description');
    productosDescriptionContainer.classList.add("container");
    
    productosDescriptionContainer.innerHTML =`
    
    <h2 class="name"> ${prodcuctos.displayName} <h2/>
    <p class= "description"> ${prodcuctos.description} <p/>
    <img class="img" src=${prodcuctos.displayIcon}>` 
});

