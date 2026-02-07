const { ProductosRepository } = require ('../repositories/productos.repository')

const repo = new ProductosRepository()

function getAll(req, res) {
    return res.json(repo.getAll())
}

function getById(req, res) {
    const id = Number(req.params.id)
    const producto = repo.getById(id)

    if( !producto ) {
        return res.status(404).json({ error: 'Producto no encontrado'})
    }

    return res.json(producto)
}

function create(req, res) {
    const {nombre, precio} = req.body

    if( !nombre || typeof nombre !== 'string') {
        return res.status(400).json({ error: 'Nombre inválido' })
    }

    const precioNumber = Number(precio);

    if( precio <= 0 ) {
        return res.status(400).json({ error: 'Precio inválido' })
    }

    const nuevo = repo.create({nombre, precio: precioNumber})
    return res.status(201).json(nuevo)
}

function update(req, res) {
    const id = Number(req.params.id);
    const actualizado = repo.update( id, req.body )

    if ( !actualizado ) {
        return res.status(404).json({ error: 'No encontrado' })
    }

    return res.json(actualizado)
}

function remove(req, res) {
    const id = Number(req.params.id);
    const ok = repo.delete(id)

    if ( !ok ){
        return res.status(404).json({ error: 'No encontrado' })
    }

    return res.status(204).send()
}

module.exports = { getAll, getById, create, update, remove }