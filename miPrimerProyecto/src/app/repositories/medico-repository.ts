import { Injectable, signal } from '@angular/core';
import { Medico } from '../models/medico';

@Injectable({ providedIn: 'root' })
export class MedicoRepository {
  private readonly _medicos = signal<Medico[]>([]);
  readonly medicos = this._medicos.asReadonly();

  agregar(medico: Medico): void {
    this._medicos.update(lista => [...lista, medico]);
  }

  obtenerTodos(): Medico[] {
    return this._medicos();
  }

  buscarPorId(id: number): Medico | undefined {
    return this._medicos().find(m => m.id === id);
  }

  siguienteId(): number {
    return this._medicos().length + 1;
  }
}