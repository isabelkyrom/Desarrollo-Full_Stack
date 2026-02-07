const express = require('express');
const PORT = 3000;

const { router: PedidosRepository } = require('../Actividad-3/src/routes/pedidos.routes')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Escuchando')
})

app.use('/pedidos', PedidosRepository);

app.listen(PORT, () => {
    console.log("Servidor Corriendo")
})