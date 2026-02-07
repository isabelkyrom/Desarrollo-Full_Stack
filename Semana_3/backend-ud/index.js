const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())

let productos = [
    {
        "nombre": "Romero"
    }
];

app.get('/', (req, res) =>{
    res.send("mucho texto")
})

app.get('/productos', (req, res) =>{
    res.json(productos)
})

app.post('/productos', (req, res) => {
    const producto = req.body;
    productos.push(producto)
    res.status(201).json(producto)
})

app.put('/productos/:id', (req, res) => {
    const id = req.params.id;
    

    if(req.body) {
        if(productos[id]){
            res.status(404).send("No existe el ID")
        }

        productos[id] = req.body
        res.json(productos[id])
    }else {
        return res.status(400).send("Error: 400")
    }

    console.log("Esta vacio")
    return res.status(400)
    
    
})

app.delete('/productos/:id', (req, res) => {
    const id = req.params.id
    productos.splice(id, 1)
    res.send("Eliminado")
})

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})