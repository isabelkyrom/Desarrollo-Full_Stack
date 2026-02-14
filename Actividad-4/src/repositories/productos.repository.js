// REPOSITORIO
// Guarda/lee datos, no sabe de express, no valida reglas

const { pool } = require('../db');

class ProductosRepository {

  async getAll() {
    const result = await pool.query(
      'select id, nombre, precio from productos order by id desc;'
    );
    return result.rows;
  }

  async getAllActive() {
    const result = await pool.query(
      'select id, nombre, precio from productos where activo = true order by id desc;'
    );
    return result.rows;
    // return this.productos.filter(producto => producto.active);
  }

  async getById(id) {
    const result = await pool.query(
      'select id, nombre, precio, stock, descripccion from productos where activo = true and id = $1;', [id]
    );
    return result.rows[0];
    // return this.productos.find(producto => producto.id === id);
  }
// ----------
  async buscar({ nombre, minPrecio, maxPrecio, page, limit }) {

    let query = 'select id, nombre, precio from productos where activo = true';
    let valores = [];
    let index = 1;

    if( nombre ) {
      query += ` and trim(nombre) ilike $${index}`;
      valores.push(`%${nombre}%`)
      index ++;
    }

    if( minPrecio ) {
      query += ` and precio >= $${index}`;
      valores.push(minPrecio)
      index ++;
    }

    if( maxPrecio ) {
      query += ` and precio <= $${index}`;
      valores.push(maxPrecio)
      index ++;
    }

    query += ' order by id desc';
    if( page && limit) {
      const offset = ( page - 1 ) * limit;
      query += ` limit $${index} offset $${index + 1}`;
      valores.push(limit, offset);
    }

    const result = await pool.query(query, valores);
    
    return result.rows;
  }

  async create(nombre, precio) {
    const result = await pool.query(
      'insert into productos (nombre, precio) values ($1,$2) returning id, nombre, precio;',[nombre, precio] 
    );
    return result.rows[0];
    // const newProducto = { id: this.nextId++, nombre, precio };
    // this.productos.push(newProducto);
    // return newProducto;
  }
  async update(id, data) {
    /*
    const producto = this.getById(id);
    if (producto) {
      producto.nombre = data.nombre;
      producto.precio = data.precio;
      return producto;
    }
    return null;
    */
   const result = await pool.query(
    'update productos set nombre = coalesce($1, nombre), precio = coalesce($2, precio) where id = $3 returning id, nombre, precio',[data.nombre ?? null, data.precio ?? null, id]  
   );
   return result.rows[0] || null;
  }

  async delete(id) {
    /*
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      return this.productos.splice(index, 1)[0];
    }
    return null;
    */
    const result = await pool.query(
      'delete from productos where id = $1 returning id', [id]
    );
    return result.rows[0] || null;
  }
}

module.exports = { ProductosRepository }