import { getConnection } from './db';
import { Rol } from './Rol';

export class GestorRol {
  async agregarRol(nombre: string) {
    const connection = await getConnection();
    const [result] = await connection.execute('INSERT INTO rol (nombre) VALUES (?)', [nombre]);
    return result;
  }

  async obtenerRoles() {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM rol');
    return rows;
  }

  async actualizarRol(idRol: number, nombre: string) {
    const connection = await getConnection();
    await connection.execute('UPDATE rol SET nombre = ? WHERE idRol = ?', [nombre, idRol]);
  }

  async eliminarRol(idRol: number) {
    const connection = await getConnection();
    await connection.execute('DELETE FROM rol WHERE idRol = ?', [idRol]);
  }
}
