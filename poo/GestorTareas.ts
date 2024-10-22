import { getConnection } from './db';
import { Tarea } from './Tarea';

export class GestorTareas {
  async agregarTarea(descripcion: string, idUsuario?: number) {
    const connection = await getConnection();
    const [result] = await connection.execute('INSERT INTO tareas (descripcion, completada, idUsuario) VALUES (?, ?, ?)', [descripcion, false, idUsuario]);
    return result;
  }

  async obtenerTareas() {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM tareas');
    return rows;
  }

  async actualizarTarea(id: number, completada: boolean) {
    const connection = await getConnection();
    await connection.execute('UPDATE tareas SET completada = ? WHERE id = ?', [completada, id]);
  }

  async eliminarTarea(id: number) {
    const connection = await getConnection();
    await connection.execute('DELETE FROM tareas WHERE id = ?', [id]);
  }
}
