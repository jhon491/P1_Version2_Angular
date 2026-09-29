import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  public proyecto: any = {anio: '2026', nombreProyecto: 'Proyecto de Clase Angular'};
  public tecnologia: any = {leyenda: 'WebApp desarrollada con  ', tec1: 'Angular', tec2:'Spring Boot'};
  public autor: string = 'Jhon Breisman Quenguan Cuaycal';
}
