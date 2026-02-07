const express = require('express')

const app = express()
const PORT = 3000

const data = {
    curso: "Desarrollo Full Stack",
    semana: 3,
    dia: 2
}


app.get('/', (req, res) => {
    res.send('Hola en mi nueva aplicacion express.js')
})

app.get('/saludo', (req, res) =>{
    res.send('Hola desde /SALUDO')
})

app.get('/json', (req, res) => {
    res.json({
        message: "Este es un mensaje en JSON",
        status: "ok",
        data: [{
            id: 1, 
            nombre: "Kyra"
        }, 
        {
            id:2,
            nombre: "Joce"
        }]

    })
})
app.get('/hola', (req, res) => {
    res.json({
        categoria: [{
            1: "planta",
            2: "cosas"
        }],
        numero: "2",
        titulo: "FLores silvestres"
    })
})

app.get('/info', (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`)
})