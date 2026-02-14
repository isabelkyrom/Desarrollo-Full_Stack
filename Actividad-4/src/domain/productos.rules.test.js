const { validarProducto } = require('./productos.rules');

test('rechaza nombre vacio', () => {
    const r = validarProducto({ nombre: '', precio: 34 });
    expect(r.ok).toBe(false)
})

test('precio mayor a cero', () => {
    const r = validarProducto({ nombre: 'Mouse', precio: 0 });
    expect(r.ok).toBe(false)
})