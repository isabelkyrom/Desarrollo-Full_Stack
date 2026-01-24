import { createElement } from "react"

const list = document.querySelector("#productos")

const msg = document.querySelector("#msg")
/*
const boton = document.querySelector("#agregar-btn")
input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        boton.click()
    }
})
*/
const showMessage = (text, className = "ok") => {
    msg.textContent = text
    msg.className = className
}
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
    desc.innerHTML = `<p>${description} <br>Categoría: ${category} <br>Rating: ${rating.rate}</p>`
    desc.classList.add("hidden")
    return desc;
}
const createButton = () => {
    const button = document.createElement("button")
    button.textContent = "Más..."
    button.classList.add("mas-btn")
    return button;
}

const nombre = document.querySelector("#nombre")
const precio = document.querySelector("#precio")
const descripcion = document.querySelector("#desc")
const categoria = document.querySelector("#categoria")

const boton = document.querySelector("#agregar-btn")

const nuevoProd = () => {
    const id = list.children.length() + 1;
    const producto = {
        id: id,
        nombre: nombre.value, 
        precio: precio.value, 
        descripcion: descripcion.value,
        categoria: categoria.value
    }
    return producto;
}

boton.addEventListener("click", () => {
    const prod = nuevoProd()
    
})


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

