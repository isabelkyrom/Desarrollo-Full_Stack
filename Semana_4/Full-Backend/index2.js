const express = require('express')

const { router: ProductosRepository } = require('../Full-Backend/routes/productos.routes')

const app = express()
app.use(express.json)

app.get('/', (req, res) => {
    res.send('API OK')
})

app.use('/productos', ProductosRepository);

app.listen(3000, () => {
    console.log("Servidor Corriendo")
})