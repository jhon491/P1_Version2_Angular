import { Component, inject } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GestionarCitas } from '../../services/gestionar-citas';
import { GestionarMedicos } from '../../services/gestionar-medicos';
import { GestionarPacientes } from '../../services/gestionar-pacientes';
import { NotificacionService } from '../../services/notificacion';
import { correoInstitucional, horaFinMayorQueInicio, longitudEntre} from '../../validators/validadores';

@Component({
  standalone: true,
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  private fb = inject(NonNullableFormBuilder);
  private gestionarMedicos = inject(GestionarMedicos);
  private gestionarPacientes = inject(GestionarPacientes);
  private gestionarCitas = inject(GestionarCitas);
  private notificaciones = inject(NotificacionService);

  medicos = this.gestionarMedicos.medicos;
  pacientes = this.gestionarPacientes.pacientes;
  citas = this.gestionarCitas.citas;

  formPaciente = this.fb.group({
    tipoIdentificacion: ['', Validators.required],
    identificacion: ['', Validators.required],
    nombres: ['', longitudEntre(1, 20, 'nombre')],
    apellidos: ['', longitudEntre(1, 20, 'apellido')],
    correoElectronico: ['', [Validators.required, correoInstitucional()]],
    genero: ['', Validators.required],
  });

  formMedico = this.fb.group({
    tipoIdentificacion: ['', Validators.required],
    identificacion: ['', Validators.required],
    nombres: ['', longitudEntre(1, 20, 'nombre')],
    apellidos: ['', longitudEntre(1, 20, 'apellido')],
    especialidad: [''],
    horario_atencion: [''],
    anios_experiencia: this.fb.control<number | null>(null, [Validators.min(0)]),
    bibliografia: [''],
  });

  formCita = this.fb.group(
    {
      fecha: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
      medicoId: this.fb.control<number | null>(null, Validators.required),
      pacienteId: this.fb.control<number | null>(null, Validators.required),
    },
    { validators: horaFinMayorQueInicio() }
  );

  registrarPaciente(): void {
    if (this.formPaciente.invalid) {
      this.formPaciente.markAllAsTouched(); 
      return;
    }
    const v = this.formPaciente.getRawValue();
    const paciente = this.gestionarPacientes.registrarPaciente(
      v.tipoIdentificacion, v.identificacion, v.nombres, v.apellidos, v.correoElectronico, v.genero
    );
    this.formPaciente.reset();
    this.notificaciones.mostrar(`Paciente ${paciente.nombres} ${paciente.apellidos} registrado con éxito`);
  }

  registrarMedico(): void {
    if (this.formMedico.invalid) {
      this.formMedico.markAllAsTouched();
      return;
    }
    const v = this.formMedico.getRawValue();
    const medico = this.gestionarMedicos.registrarMedico(
      v.tipoIdentificacion, v.identificacion, v.nombres, v.apellidos,
      v.especialidad, v.horario_atencion, v.anios_experiencia ?? 0, v.bibliografia
    );
    this.formMedico.reset();
    this.notificaciones.mostrar(`Médico ${medico.nombres} ${medico.apellidos} registrado con éxito`);
  }

  registrarCita(): void {
    if (this.formCita.invalid) {
      this.formCita.markAllAsTouched();
      return;
    }
    const { fecha, horaInicio, horaFin, medicoId, pacienteId } = this.formCita.getRawValue();
    if (medicoId === null || pacienteId === null) {
      return;
    }
    try {
      this.gestionarCitas.registrarCita(fecha, horaInicio, horaFin, medicoId, pacienteId);
      this.formCita.reset();
      this.notificaciones.mostrar('Cita registrada con éxito');
    } catch (error) {
      this.notificaciones.mostrar((error as Error).message, 'error');
    }
  }

  mensajeError(control: AbstractControl): string {
    if (!control.touched || !control.errors) {
      return '';
    }
    if (control.hasError('longitud')) {
      return control.getError('longitud');
    }
    if (control.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
    if (control.hasError('correoInstitucional')) {
      return 'El correo debe tener el dominio @unicauca.edu.co';
    }
    if (control.hasError('min')) {
      return 'El valor no puede ser negativo.';
    }
    return '';
  }
}