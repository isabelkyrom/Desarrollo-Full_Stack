/*
console.log("Hola desde mi pagina ejemplo")
let edad = 19;
const nombre = "Isabel Kyra Romero"
console.log("Hola, me llamo " + nombre + ", mi edad es " + edad)

function anioNacimiento(edad){
return 2026-edad
}

let anioNacimiento = (edad) => 2026-edad

const anioNacimiento = (edad) => 2026-edad

console.log("mi año de nacimiento es " + anioNacimiento(edad))

//const parrafo = document.getElementById("parrafo-1")
//console.log(parrafo.childNodes)

let parrafo = document.querySelector("#parrafo-1")
console.log(parrafo)

let spanRojo = document.querySelector(".rojo")

let h1 = document.querySelector("h1")

const boton = document.querySelector("#boton-1")

const input = document.querySelector("#input-1")

input.addEventListener("input", (evento) => {
    console.log(evento.target.value)
})

boton.addEventListener("click", () => {
    console.log("hiciste click en el boton")
})


//  
const input = document.querySelector("#tarea")

const boton = document.querySelector("#boton")

const div1 = document.querySelector("#div1")

boton.addEventListener("click", () => {
    if(input.value.trim() === "") {
        div1.textContent = "El campo esta vacío"
        return;
    }
    div1.textContent = "Tarea Agregada: " + input.value

    input.value = ""
})
*/

/*
addTaskButton.addEventListener("click", () => {
    const task = createElement(li)
    task.textContent = newTaskInput.value

    list.classList.add(task)
})
*/

const addTaskButton = document.querySelector("#addTaskButton")

const newTaskInput = document.querySelector("#newTaskInput")

const list = document.querySelector("#todo-list")

const messageBox = document.querySelector(".msg")

const contador = document.querySelector("#contador")

const newParent = document.querySelector("#completadas")

newTaskInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addTaskButton.click()
    }
})

addTaskButton.addEventListener("click", (e) => {
    if (newTaskInput.value.trim() !== "") {
        const li = createListItem()
        const delButton = li.appendChild(createDeleteButton())

        newTaskInput.value = ""
        
        showMessage("Tarea Agregada")

        delButton.addEventListener("click", (e) => {
            e.stopPropagation(); 
            li.remove()
            showMessage("Tarea Eliminada", "warning")
            updateTextCount()
        })


        li.addEventListener("click", (e) => {
            
            newParent.appendChild(li)
            updateTextCount()
        })

        updateTextCount()
        return;
    }
    showMessage("Campo vacío", "error")
})

const updateTextCount = () => {
    const count = list.children.length
    contador.textContent = "Tareas pendientes: " + count;
}

const showMessage = (text, className = "ok") => {
    messageBox.textContent = text
    messageBox.className = className
}

const createListItem = () => {
    const li = document.createElement("li")
    li.textContent = newTaskInput.value
    list.appendChild(li)
    return li;
}

const createDeleteButton = () => {
    const delButton = document.createElement("button")
    delButton.textContent = "x"
    delButton.classList.add("close-btn")
    return delButton;
}

