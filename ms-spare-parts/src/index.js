import express from "express"
import indexRoutes from './routes/index.js'
import cors from "cors";

//Main
const app = express()

app.use(cors({
    origin: 'http://localhost:3001', // Permitir solicitudes desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Métodos permitidos
  }));

app.listen(3005)

app.use(express.json())

app.use('/api',indexRoutes)

console.log("Server en puerto 3000 ")