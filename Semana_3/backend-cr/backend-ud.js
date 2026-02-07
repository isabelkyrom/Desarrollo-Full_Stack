const express = require("express")

const app = express();
const PORT = 3000;

app.use(express.json());

let productos = [];

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
    productos[id] = req.body
    res.json(productos[id])
})

app.delete('/productos/:id', (req, res) => {
    const id = req.params.id
    productos.splice(id, 1)
    res.send("Eliminado")
})

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})