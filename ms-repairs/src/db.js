import {createPool} from 'mysql2/promise'

//Conexion a la base de datos
export const pool = createPool({
    host: 'ms_repairs_db',
    user: 'root',
    password: 'test',
    port: '3306',
    database: 'msrepairs'
})
