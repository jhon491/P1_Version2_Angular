export class Medico {
  constructor(
    public id: number,
    public tipoIdentificacion: string,
    public identificacion: string,
    public nombres: string,
    public apellidos: string,
    public especialidad: string,
    public horario_atencion: string,
    public anios_experiencia: number,
    public bibliografia: string,
    //public subespecialidad?: string,
    //public foto?: string
  ) {}
}