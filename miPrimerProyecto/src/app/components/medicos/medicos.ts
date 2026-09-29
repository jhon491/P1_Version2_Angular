import { Component, signal } from '@angular/core';

interface Especialidad {
  nombre: string;
  descripcion: string;
}

@Component({
  standalone: true,
  imports: [],
  selector: 'app-medicos',
  styleUrl: './medicos.css',
  templateUrl: './medicos.html',
})
export class Medicos {
  
  especialidades: Especialidad[] = [
    { nombre: 'Terapia Neural', descripcion: 'La Terapia Neural regula el sistema nervioso mediante anestésicos locales' },
    { nombre: 'Quiropraxia', descripcion: 'La Quiropraxia se enfoca en el diagnóstico y tratamiento de trastornos neuromusculoesqueléticos' },
    { nombre: 'Fisioterapia', descripcion: 'La Fisioterapia ayuda a restaurar el movimiento y la función afectada por una lesión o enfermedad' },
    { nombre: 'Nutrición y Dietética', descripcion: 'La Nutrición y Dietética adapta la alimentación para tratar o mejorar ciertas condiciones de salud' },
    { nombre: 'Pediatría', descripcion: 'La Pediatría involucra la atención médica de bebés, niños y adolescentes' },
    { nombre: 'Cardiología', descripcion: 'La Cardiología es el estudio y tratamiento de los trastornos del corazón' },
    { nombre: 'Dermatología', descripcion: 'La Dermatología se especializa en enfermedades de la piel, cabello y uñas' },
  ];

  textoInfo = signal('');

  seleccionarEspecialidad(especialidad: Especialidad, evento: Event): void {
    evento.preventDefault();
    this.textoInfo.set(especialidad.descripcion);
  }
}