import { Injectable, signal } from '@angular/core';
export type TipoNotificacion = 'exito' | 'error';

export interface Notificacion {
  id: number;
  mensaje: string;
  tipo: TipoNotificacion;
}

@Injectable({ providedIn: 'root' })
export class NotificacionService {
  private contador = 1;
  private readonly _notificaciones = signal<Notificacion[]>([]);
  readonly notificaciones = this._notificaciones.asReadonly();

  mostrar(mensaje: string, tipo: TipoNotificacion = 'exito', duracionMs = 3000): void {
    const id = this.contador++;
    this._notificaciones.update(lista => [...lista, { id, mensaje, tipo }]);
    setTimeout(() => {
      this._notificaciones.update(lista => lista.filter(n => n.id !== id));
    }, duracionMs);
  }
}