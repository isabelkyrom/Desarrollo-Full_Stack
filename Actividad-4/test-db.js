const { pool } = require('./src/db');

(async () => {
    const r1 = await pool.query('select 1 as ok');
    console.log('Prueba select 1: ', r1.rows);

    const r2 = await pool.query(
        'select id, nombre, precio from productos limit 5 offset 5;'
    );
    console.log('Prueba select 2: ', r2.rows);

})();