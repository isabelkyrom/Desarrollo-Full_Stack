// CRONTOLLERS
// Valida datos, decide errores y maneja status

const { PedidosRepository } = require("../repositories/pedidos.repository");

const repo = new PedidosRepository;

function getAll( req, res ) {
    return res.json( repo.getAll() )
}

function getById( req, res ) {
    const id = Number(req.params.id)
    const pedido = repo.getById(id)

    // Si el pedido no existe
    if( !pedido ) {
        return res.status(404).json({ error: 'El pedido no existe' })
    }

    return res.json(pedido)
}

function create( req, res ) {
    const { producto, cantidad } = req.body

// !EXISTE y TYPEOF
    // Validación producto
    if( !producto || typeof producto !== 'string') {
        return res.status(400).json({ error: 'Producto inválido' })
    }

    // Convierte la cantidad en numero
    const cantidadNum = Number(cantidad);

    // Validación cantidad
    if( !cantidad || typeof cantidadNum !== 'number' || cantidadNum <= 0 ) {
        return res.status(400).json({ error: 'Cantidad inválido' })
    }

    const nuevo = repo.create(producto, cantidadNum)
    return res.status(201).json(nuevo)
}

function update( req, res) {
    const id = Number(req.params.id);
    const cambios = req.body;
    const pedido = repo.getById(id)
    const estadosValidos = ['pendiente', 'confirmado', 'cancelado']

    // Si el pedido no existe
    if ( !pedido ) {
        return res.status(404).json({ error: 'Pedido no encontrado' })
    }
    
    // Si esta vacio
    if ( Object.keys(cambios).length === 0 ) {
        return res.status(400).json({ error: 'No se enviaron datos para actualizar' })
    }

    // Validación de estasdos que sean Validos
    if ( cambios.estado !== undefined && !estadosValidos.includes(cambios.estado) ) {
        return res.status(400).json({ error: 'Estado inválido' })
    }

    // Validación del esatdo pendiente
    if (pedido.estado !== "pendiente" ) {
        return res.status(400).json({ error: 'El pedido no se puede modificar si no se encuentra en estado pendiente' })
    }

    // Validación producto
    if ( cambios.producto !== undefined && typeof cambios.producto !== 'string' ) {
        return res.status(400).json({ error: 'Producto inválido' })
    }

    // Validación cantidad
    if ( cambios.cantidad !== undefined && (typeof cambios.cantidad !== 'number' || cambios.cantidad <= 0) ) {
        return res.status(400).json({ error: 'Cantidad inválida' })
    }

    const actualizado = repo.update(id, cambios)
    return res.status(200).json(actualizado)
}

function remove( req, res ) {
    const id = Number(req.params.id);
    const pedido = repo.getById(id);

    // Si el id no existe
    if ( !pedido ) {
        return res.status(404).json({ error: 'Pedido no encontrado' })
    }

    // Validación pendiente
    if ( pedido.estado !== 'pendiente' ) {
        return res.status(400).json({ error: 'Solo se pueden eliminar pedidos pendientes' })
    }

    repo.delete(id);

    return res.status(204).json(pedido)

}

module.exports = { getAll, getById, create, update, remove };