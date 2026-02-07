const { log } = require("console")
const http = require("http")

/*
http.createServer(() => {
    console.log("Hola mundo")
}).listen(3000, () => {
    console.log('sevidor activo en http://localhost:3000')
})
*/

// Request
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})

//    console.log(req)
/*  SIN FRAMEWORK
    if(req.url === "/login" && req.method === 'GET') {
        return  res.end(JSON.stringify({message:"Página de login"}))
    }
    if(req.url === "/login" && req.method === 'POST') {
        let body = {}
        req.on('data', chunk => {
            const body = JSON.parse(chunk.toString())
            console-log(body)
        })

        //return  res.end(JSON.stringify({message:"Página de login"}))
        return res.end(JSON.stringify({
            message: "Procesando login",
            status: "succes",
            id: body.id
        }))

    }
*/


    res.end("Hola!!, <3")
    console.log("algo")

})
// Respose
server.listen(4000, () => {
    console.log('sevidor activo en http://localhost:4000')
})