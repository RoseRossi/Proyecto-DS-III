import {createPool} from 'mysql2/promise'

//Conexion a la base de datos
export const pool = createPool({
    host: 'ms_spare_parts_db',
    user: 'root',
    password: 'osiris2016',
    port: '3306',
    database: 'inventario'
})
