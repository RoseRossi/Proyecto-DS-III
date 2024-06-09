import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
config();

// Conexión a la base de datos
export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});

console.log(pool)