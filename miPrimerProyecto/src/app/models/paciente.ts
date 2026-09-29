export class Paciente {
  constructor(
    public id: number,
    public tipoIdentificacion: string,
    public identificacion: string,
    public nombres: string,
    public apellidos: string,
    public correoElectronico: string,
    public genero: string
  ) {}
}