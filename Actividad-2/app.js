
const list = document.querySelector("#productos")

const obtenerDatos = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const response2 = await response.json();
        
        const productos = response2.map(({id, title, price, description, category, rating}) =>({
            id, title, price, description, category, rating
        }))

        return productos;
    } catch (error) {
        console.error(error);
    }
}

const createLi = (title, price) => {
    
    const li = document.createElement("li")
    li.innerHTML = `<h3>${title}</h3> <br><h4>Price: $${price}</h4>`
    list.appendChild(li)
    return li;
    
}
const createDesc = (description, category, rating) => {
    const desc = document.createElement("p")
    desc.innerHTML = `<p>${description} <br><b>Categoría:</b> ${category} <br><b>Rating:</b> ${rating.rate}</p>`
    desc.classList.add("hidden")
    return desc;
}
const createButton = () => {
    const button = document.createElement("button")
    button.textContent = "Más..."
    button.classList.add("mas-btn")
    return button;
}

const imprimirDatos = async () => {
    try { 

        let data = await obtenerDatos()

        data.forEach(({  title, price, description, category, rating }) => {
            const li = createLi(title, price)
            const moreButton = li.appendChild(createButton())
            const desc = li.appendChild(createDesc(description, category, rating))

            moreButton.addEventListener("click", () =>{
                desc.classList.toggle("hidden")
            })

        });

    } catch (error) {
        console.error(error);
    }
}

imprimirDatos()

const checar = ["Porfa 10,"]
const imprimir = [...checar,"pongame", "10"]
console.log(imprimir)

const boton = document.querySelector("#boton-des")
boton.addEventListener("click", () =>{
    boton.textContent = "Porfa vea la consola (DevTools)"
    console.log("Gracias 0u0")
})