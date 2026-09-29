import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function correoInstitucional(): ValidatorFn {
  const regex = /^[a-zA-Z0-9._%+-]+@unicauca\.edu\.co$/;
  return (control: AbstractControl): ValidationErrors | null =>
    regex.test(control.value ?? '') ? null : { correoInstitucional: true };
}

export function horaFinMayorQueInicio(): ValidatorFn {
  return (grupo: AbstractControl): ValidationErrors | null => {
    const inicio = grupo.get('horaInicio')?.value;
    const fin = grupo.get('horaFin')?.value;
    if (!inicio || !fin) {
      return null;
    }
    return fin > inicio ? null : { horaFinInvalida: true };
  };
}
export function longitudEntre(min: number, max: number, etiqueta: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = (control.value ?? '').toString().trim();
    if (valor.length < min || valor.length > max) {
      return { longitud: `El ${etiqueta} debe tener entre ${min} y ${max} caracteres` };
    }
    return null;
  };
}