import { Injectable, inject } from '@angular/core';
import { Medico } from '../models/medico';
import { MedicoRepository } from '../repositories/medico-repository';

@Injectable({ providedIn: 'root' })
export class GestionarMedicos {
  private repoMedico = inject(MedicoRepository);

  readonly medicos = this.repoMedico.medicos;

  registrarMedico(
    tipoIdentificacion: string,
    identificacion: string,
    nombres: string,
    apellidos: string,
    especialidad: string,
    horario_atencion: string,
    anios_experiencia: number,
    bibliografia: string
  ): Medico {
    const id = this.repoMedico.siguienteId();
    const medico = new Medico(id, tipoIdentificacion, identificacion, nombres, apellidos, especialidad, horario_atencion, anios_experiencia, bibliografia);
    this.repoMedico.agregar(medico);
    return medico;
  }

  listarMedicos(): Medico[] {
    return this.repoMedico.obtenerTodos();
  }

  buscarMedico(id: number): Medico | undefined {
    return this.repoMedico.buscarPorId(id);
  }
}