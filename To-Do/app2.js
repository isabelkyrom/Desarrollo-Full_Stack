// Destructuring

const user = {
    nombre: "Ana",
    edad: 20 
}

    // console.log(user.nombre)

const{nombre, edad} = user

    // console.log(nombre)

const tareas = ["a", "b"];

const nuevo = [...tareas, "c"]

    //console.log(tareas)
    //console.log(...tareas)
console.log(nuevo)

// MAP
const productos = new Map()

productos.set(1, "laptop")
productos.set(2, "Monitor")
console.log(productos)

// SET
const categorias = new Set()
categorias.add("Escuela")

    // console.log(categorias)

// MODULE

import { saludar } from "./data.js";

    // saludar("Josè")

console.log("inicio")
setTimeout(() => console.log("Despues"), 1000)
console.log("Fin")

// PROMESAS

const tarea = new Promise(resolve => {
    setTimeout(() => console.log("Despues"), 1000)
})

tarea.then(res => console.log(res))

//ASYNC AWAIT

const ejecutar = async () => {
    const res = await tarea;
    console.log(res)
}

    // ejecutar()

// FETCH / then / catch

const userList = document.querySelector("#users");
let dataUsers = [];

fetch("")
 .then(res => res.json())
 .then(data => {
    console.log(data(5).name)
 })
 .catch(err => console.log(err))

