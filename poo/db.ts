import mysql from 'mysql2/promise';

export const getConnection = async () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario', // Cambia por tu usuario
    password: 'tu_contraseña', // Cambia por tu contraseña
    database: 'gestor_tareas',
  });
};
