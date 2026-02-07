// REPOSITORIO
// Guarda/lee datos, no sabe de express, no valida reglas
class PedidosRepository{
    #pedidos
    #nextId
    constructor() {
        this.#pedidos = [{
            id: 1,
            producto: "Vasos de cristal",
            cantidad: 4,
            estado: "cancelado"
        },
        {
            id: 2,
            producto: "Galletas",
            cantidad: 3,
            estado: "confirmado"
        }

        ]
        this.#nextId = 3;
    }

    getAll() {
        return [...this.#pedidos]
    }

    getById(id) {
        return this.#pedidos.find(pedido => pedido.id === id)
    }

    create(producto, cantidad) {
        const nuevoPedido = {
            id : this.#nextId++,
            producto: producto,
            cantidad : cantidad,
            estado : "pendiente"
        }

        this.#pedidos.push(nuevoPedido)
        return nuevoPedido;
    }
    
    update(id, data) {
        const pedido = this.getById(id);

        if (!pedido) return null;

        if (data.producto !== undefined) {
            pedido.producto = data.producto;
        }

        if (data.cantidad !== undefined) {
            pedido.cantidad = data.cantidad;
        }

        if (data.estado !== undefined) {
            pedido.estado = data.estado;
        }

        return pedido;
    }

    delete(id) {
        const index = this.#pedidos.findIndex(producto => producto.id === id);

        this.#pedidos.splice(index, 1)

    }
}

module.exports = { PedidosRepository };