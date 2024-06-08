import { Router } from 'express'
import {actualizarReparacion, crearReparacion} from '../controllers/index.js'

const router = Router()

//Rutas 
router.post('/create-repair', crearReparacion);
router.patch('/reparaciones/:id/finalizar', actualizarReparacion);

export default router;