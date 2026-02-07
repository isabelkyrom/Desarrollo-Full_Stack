const express = require('express')

const app = express()
const port = 3000

let productos = []

// Middleware, para leer os datos en json
app.use(express.json())

// ENDPOINTS
app.get('/', (req, res) => {
    res.send('mucho texto')
})

app.get('/productos', (req, res) => {
    res.json(productos)
})

app.post('/productos', (req, res) => {
    const nuevoProductos = req.body

    productos.push(nuevoProductos)
    res.status(201).json(nuevoProductos)

    

    /*
    productos.push(nuevoProducto)
    res.status(201).json(nuevoProducto)
    */
})

app.listen(port, () => {
    console.log(`servidor en http://localhost:${port}`)
})