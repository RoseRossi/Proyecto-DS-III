import { pool } from '../db.js'

//Apis que se llaman desde las rutas

export const crearReparacion = async (req, res) => {
    const reparacion = req.body;
    try {
        await pool.query('INSERT INTO reparaciones SET ?', reparacion);
        res.status(201).json({ message: 'Reparación creada exitosamente' });
    } catch (error) {
        console.error('Error al insertar reparación:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const actualizarReparacion = async (req, res) => {
    const { id } = req.params;
    const { finished } = req.body;
    try {
      const [result] = await pool.query('UPDATE reparaciones SET finished = ? WHERE id = ?', [finished, id]);
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Reparación no encontrada' });
      } else {
        res.status(200).json({ message: 'Reparación actualizada exitosamente' });
      }
    } catch (error) {
      console.error('Error al actualizar reparación:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };