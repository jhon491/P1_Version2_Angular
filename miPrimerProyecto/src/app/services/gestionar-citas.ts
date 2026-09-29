import { Injectable, inject } from '@angular/core';
import { Cita } from '../models/cita';
import { CitaRepository } from '../repositories/cita-repository';
import { MedicoRepository } from '../repositories/medico-repository';
import { PacienteRepository } from '../repositories/paciente-repository';

@Injectable({ providedIn: 'root' })
export class GestionarCitas {
  private medicoRepo = inject(MedicoRepository);
  private pacienteRepo = inject(PacienteRepository);
  private citaRepo = inject(CitaRepository);

  readonly citas = this.citaRepo.citas;

  registrarCita(fecha: string, horaInicio: string, horaFin: string, idMedico: number, idPaciente: number): Cita {
    const id = this.citaRepo.siguienteId();
    const medico = this.medicoRepo.buscarPorId(idMedico);
    if (!medico) {
      throw new Error('Médico no encontrado');
    }
    const paciente = this.pacienteRepo.buscarPorId(idPaciente);
    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }

    const cita = new Cita(id, fecha, horaInicio, horaFin, medico, paciente);
    this.citaRepo.agregar(cita);
    return cita;
  }

  listarCitas(): Cita[] {
    return this.citaRepo.obtenerTodas();
  }

  buscarCita(id: number): Cita | undefined {
    return this.citaRepo.buscarPorId(id);
  }
}