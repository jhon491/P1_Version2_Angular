import { Injectable, signal } from '@angular/core';
import { Paciente } from '../models/paciente';

@Injectable({ providedIn: 'root' })
export class PacienteRepository {
  private readonly _pacientes = signal<Paciente[]>([]);
  readonly pacientes = this._pacientes.asReadonly();

  agregar(paciente: Paciente): void {
    this._pacientes.update(lista => [...lista, paciente]);
  }

  obtenerTodos(): Paciente[] {
    return this._pacientes();
  }

  buscarPorId(id: number): Paciente | undefined {
    return this._pacientes().find(p => p.id === id);
  }

  siguienteId(): number {
    return this._pacientes().length + 1;
  }
}