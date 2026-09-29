import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  standalone: true,  
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  public nombres: string = "Juan";
  public apellidos: string = "Perez";
  public disciplina: string = "Soy desarrollador BackEnd especialista en node.js";
  public descripcion: string = "Estudiante de Ingeniería de Software apasionado por el desarrollo BackEnd";
}
