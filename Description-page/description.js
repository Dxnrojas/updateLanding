const block1 = document.querySelector('.block1')

const urlParams = new URLSearchParams(window.location.search)
const id = parseInt(urlParams.get('id'))

fetch('../Parcial-I/data.json')
	.then(response => response.json())
	.then(data => {
		const { panaderia } = data
		const elemento = panaderia.find(item => item.id === id) // Buscar el elemento con el ID coincidente
		if (elemento) {
			block1.innerHTML = `
                <div class="innerblocks1" id="productoextra">
                <img src="${elemento.img}" alt="${elemento.name}" class="img-detail">
                </div>
                <div class="bottomblock1">
                    <p class="letras1">${elemento.name}</p>
                    <p id="cuadrotexto">${elemento.description}</p>
                    <p>${elemento.price}</p>
                    <div class="añadir">
                        <p class="añadir__text">Añadir a favoritos</p>
                    </div>
                </div>
            `
		} else {
			block1.innerHTML = 'Elemento no encontrado'
		}
	})
