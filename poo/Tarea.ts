export class Tarea {
    constructor(public id: number, public descripcion: string, public completada: boolean = false, public idUsuario?: number) {}
  }
  