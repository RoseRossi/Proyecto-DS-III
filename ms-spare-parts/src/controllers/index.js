import { pool } from '../db.js'

//Apis que se llaman desde las rutas

export const agregarRepuesto = async (req, res) => {
  const { nombre, descripcion, precio, cantidad } = req.body;
  try {
      await pool.query('INSERT INTO repuestos (nombre, descripcion, precio, cantidad) VALUES (?, ?, ?, ?)', [nombre, descripcion, precio, cantidad]);
      res.status(201).json({ message: 'Repuesto agregado exitosamente' });
  } catch (error) {
      console.error('Error al insertar repuesto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const editarRepuesto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, cantidad } = req.body;
  try {
      await pool.query('UPDATE repuestos SET nombre = ?, descripcion = ?, precio = ?, cantidad = ? WHERE id = ?', [nombre, descripcion, precio, cantidad, id]);
      res.json({ message: 'Repuesto actualizado exitosamente' });
  } catch (error) {
      console.error('Error al actualizar repuesto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const eliminarRepuesto = async (req, res) => {
  const { id } = req.params;
  try {
      await pool.query('DELETE FROM repuestos WHERE id = ?', [id]);
      res.json({ message: 'Repuesto eliminado exitosamente' });
  } catch (error) {
      console.error('Error al eliminar repuesto:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
};