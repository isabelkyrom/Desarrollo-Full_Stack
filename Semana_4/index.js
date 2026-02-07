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

app.listen(port, () => {
    console.log(`servidor en http://localhost:${port}`)
})