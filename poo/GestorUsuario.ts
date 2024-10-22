import { getConnection } from './db';
import { Usuario } from './Usuario';

export class GestorUsuario {
  async agregarUsuario(mail: string, idRol: number) {
    const connection = await getConnection();
    const [result] = await connection.execute('INSERT INTO usuario (mail, idRol) VALUES (?, ?)', [mail, idRol]);
    return result;
  }

  async obtenerUsuarios() {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM usuario');
    return rows;
  }

  async actualizarUsuario(idUsuario: number, mail: string, idRol: number) {
    const connection = await getConnection();
    await connection.execute('UPDATE usuario SET mail = ?, idRol = ? WHERE idUsuario = ?', [mail, idRol, idUsuario]);
  }

  async eliminarUsuario(idUsuario: number) {
    const connection = await getConnection();
    await connection.execute('DELETE FROM usuario WHERE idUsuario = ?', [idUsuario]);
  }
}
