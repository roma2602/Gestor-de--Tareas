import { GestorRol } from './gestorRol';
import { GestorUsuario } from './GestorUsuario';
import { GestorTareas } from './GestorTareas';

const gestorRol = new GestorRol();
const gestorUsuario = new GestorUsuario();
const gestorTareas = new GestorTareas();

(async () => {
  // Ejemplo: Agregar rol
  const rolResult = await gestorRol.agregarRol('Administrador');
  console.log('Rol agregado:', rolResult);

  // Ejemplo: Obtener roles
  const roles = await gestorRol.obtenerRoles();
  console.log('Roles:', roles);

  // Ejemplo: Agregar usuario
  const usuarioResult = await gestorUsuario.agregarUsuario('usuario@example.com', 1);
  console.log('Usuario agregado:', usuarioResult);

  // Ejemplo: Obtener usuarios
  const usuarios = await gestorUsuario.obtenerUsuarios();
  console.log('Usuarios:', usuarios);

  // Ejemplo: Agregar tarea
  const tareaResult = await gestorTareas.agregarTarea('Aprender TypeScript', 1);
  console.log('Tarea agregada:', tareaResult);

  // Ejemplo: Obtener tareas
  const tareas = await gestorTareas.obtenerTareas();
  console.log('Tareas:', tareas);
})();
