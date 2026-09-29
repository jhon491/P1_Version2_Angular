import { Injectable, inject } from '@angular/core';
import { Paciente } from '../models/paciente';
import { PacienteRepository } from '../repositories/paciente-repository';

@Injectable({ providedIn: 'root' })
export class GestionarPacientes {
  private repoPaciente = inject(PacienteRepository);

  readonly pacientes = this.repoPaciente.pacientes;

  registrarPaciente(
    tipoIdentificacion: string,
    identificacion: string,
    nombres: string,
    apellidos: string,
    correoElectronico: string,
    genero: string
  ): Paciente {
    const id = this.repoPaciente.siguienteId();
    const paciente = new Paciente(id, tipoIdentificacion, identificacion, nombres, apellidos, correoElectronico, genero);
    this.repoPaciente.agregar(paciente);
    return paciente;
  }

  listarPacientes(): Paciente[] {
    return this.repoPaciente.obtenerTodos();
  }

  buscarPaciente(id: number): Paciente | undefined {
    return this.repoPaciente.buscarPorId(id);
  }
}