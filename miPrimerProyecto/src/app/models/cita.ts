import { Medico } from './medico';
import { Paciente } from './paciente';

export class Cita {
  constructor(
    public id: number,
    public fecha: string,
    public horaInicio: string,
    public horaFin: string,
    public medico: Medico,
    public paciente: Paciente
  ) {}
}