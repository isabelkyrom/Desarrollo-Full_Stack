const express = require("express")

const app = express()
const PORT = 3000

app.use(express.json())

let tareas = [
    {
        "nombre": "Hacer proyecto",
        // Fecha en formato YYYY/MM/DD
        "fecha_inicio": "2026/01/29",
        "fecha_final": "2026/01/30",
        "hecha": false
    }
]

// Pagina de inicio
app.get('/', (req, res) => {
    res.json({"mesagge": "Avance-Proyecto"})
})

// ----- GET
app.get('/tareas', (req, res) => {
    let noHechas = []

    // Obtener no esta hecha la tarea
    tareas.forEach(tarea => {
        if(!tarea.hecha) {
            noHechas.push(tarea)
        }
    })

    res.json(noHechas)
})

// ----- POST
app.post('/tareas', (req, res) => {
    const tarea = req.body

    // Si la tarea esta vacia
    if(!tarea) {
        return res.status(400).send("El campo esta vació")
    }

    // Si la tarea contiene todos los atributos necesarios
    if(tarea.nombre && tarea.fecha_inicio && tarea.fecha_final) {
        tarea.hecha = false
        tareas.push(tarea)

        return res.status(201).send(tarea)
    }
    res.status(400).send("Faltan valores")

})

app.put('/tareas/:id', (req, res) => {
    const nuevaTarea = req.body
    const id = Number(req.params.id)
    const anteriorTarea = tareas[id]

    // Si no existe el id
    if(id > (tareas.length - 1)){
        return res.status(404).send("Tarea no encontrada")
    }

    // Si esta vacio
    if(!nuevaTarea){
        return res.status(400).send("El campo esta vació")
    }

    // Si se van a cambiar todos los atributos
    if(nuevaTarea.nombre !== undefined && nuevaTarea.fecha_inicio !== undefined && nuevaTarea.fecha_final !== undefined) {
        tareas[id] = {...anteriorTarea,  ...nuevaTarea}

        return res.status(200).send("Tarea actualizada")
    }else{  // Si se cambian solo algunos atributos
        
        let actualizado = false
        if(nuevaTarea.nombre !== undefined) {
            anteriorTarea.nombre = nuevaTarea.nombre
            actualizado = true
        }
        if(nuevaTarea.fecha_inicio !== undefined){
            anteriorTarea.fecha_inicio = nuevaTarea.fecha_inicio
            actualizado = true
        }
        if(nuevaTarea.fecha_final !== undefined) {
            anteriorTarea.fecha_final = nuevaTarea.fecha_final
            actualizado = true
        }
        if(nuevaTarea.hecha !== undefined) {
            anteriorTarea.hecha = (nuevaTarea.hecha)
            actualizado = true
        }
        if(actualizado) {
            return res.status(200).json(anteriorTarea)
        }
        return res.status(400).send("No se envió ningún campo válido")

    }

})

// ----- DELETE
app.delete('/tareas/:id', (req, res) => {
    const id = Number(req.params.id)

    // Si no existe el id
    if(id > (tareas.length - 1)){
        return res.status(404).send("La tarea no existe")
    }// Si si existe
    tareas.splice(id, 1)
    return res.status(200).send("Tarea eliminada")

})

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`)
})