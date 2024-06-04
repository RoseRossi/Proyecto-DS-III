import { Router } from 'express'
import {agregarRepuesto, editarRepuesto, eliminarRepuesto, } from '../controllers/index.js'

const router = Router()

//Rutas 
router.post('/agregar', agregarRepuesto);
router.put('/editar/:id', editarRepuesto);
router.delete('/eliminar/:id', eliminarRepuesto);

export default router;