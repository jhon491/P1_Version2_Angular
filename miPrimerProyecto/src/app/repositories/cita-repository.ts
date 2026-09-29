import { Injectable, signal } from '@angular/core';
import { Cita } from '../models/cita';

@Injectable({ providedIn: 'root' })
export class CitaRepository {
  private readonly _citas = signal<Cita[]>([]);
  readonly citas = this._citas.asReadonly();

  agregar(cita: Cita): void {
    this._citas.update(lista => [...lista, cita]);
  }

  obtenerTodas(): Cita[] {
    return this._citas();
  }

  buscarPorId(id: number): Cita | undefined {
    return this._citas().find(c => c.id === id);
  }

  siguienteId(): number {
    return this._citas().length + 1;
  }
}