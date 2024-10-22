CREATE DATABASE gestor_tareas;
USE gestor_tareas;

CREATE TABLE rol (
    idRol INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    mail VARCHAR(50) NOT NULL,
    idRol INT,
    FOREIGN KEY (idRol) REFERENCES rol(idRol)
);

CREATE TABLE tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(255) NOT NULL,
    completada BOOLEAN NOT NULL DEFAULT FALSE,
    idUsuario INT,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);
