// CONSTRUCTOR

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }
    iva() {
        let total = this.total;
        let iva = total * .16;
        let totalConIva = total + iva
        console.log(`Total con IVA: ${totalConIva}`)
    }
    aplicarrDescuento(descuentoPorcentaje) {
        let total = this.total;
        let descuento = total * (descuentoPorcentaje /100)
        let totalConDescuento = total - descuento
        console.log(`Total con descuento: ${totalConDescuento}`)
    }
    total() {
        let sumaTotal = 0;
        this.productos.forEach(producto => {
            sumaTotal += producto.precio
        })
        return sumaTotal;
    }
}

const producto1 = new Producto(1, "Teclado", 200);
const producto2 = new Producto(2, "Memoria RAM", 30000);
const carrito = new Carrito();

carrito.agregarProducto(producto1)
carrito.agregarProducto(producto2)

console.log(carrito.productos)

carrito.aplicarrDescuento(10)
console.log(carrito.productos)

console.log(carrito.total)


//console.log(producto1, producto2)
//producto2.precio = 25000
//console.log(producto2)

// EJERCICIO

class Evento {
    constructor(id, categoria, nombre, fecha_inicio, fecha_final) {
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
    }
}

const evento1 = new Evento(1, "Festejo", "San Valentín", "2026/02/14");
const evento2 = new Evento(2, "Festejo", "Cumpleaños Joce", "2026/02/23");


// console.log(evento1, evento2)

