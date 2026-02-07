
//productos.push({id: 1, nombre: "teclado", costo: 100})

//productos[0].costo = -999

//console.log(productos)

// Repositorio

//const productos = []

class ProductosRepository{
    #productos;
    #nextId;
    constructor() {
        this.#productos = [];
        this.#nextId = 1;
    }

    getAll() {
        //return this.#productos;
        return [...this.#productos];
    }

    getById(id) {
        this.#productos.find(producto => producto.id == id);
    }

    create(nombre, precio) {
        if (typeof nombre !== 'string' || nombre.length === 0) {
            return "Nombre Invalido"
        }

        if (typeof precio !== 'number' || precio <=0) {
            return "Precio Invalido"
        }

        const nuevo = {
            id: this.#nextId++,
            nombre,
            precio
        }

        this.#productos.push(nuevo);
    }

    delete(id) {
        const index = this.#productos.findIndex(producto => producto.id == id)

        if(index === -1) {
            return false;
        }

        this.#productos.splice(index, 1)
        return true
    }

}