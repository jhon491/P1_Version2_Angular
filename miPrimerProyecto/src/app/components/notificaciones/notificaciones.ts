import { Component, inject } from '@angular/core';
import { NotificacionService } from '../../services/notificacion';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-notificaciones',
  styleUrl: './notificaciones.css',
  templateUrl: './notificaciones.html',
})
export class Notificaciones {
  notificaciones = inject(NotificacionService).notificaciones;
  icono(tipo: string): string {
    return tipo === 'exito' ? '✓' : '✕';
  }
}