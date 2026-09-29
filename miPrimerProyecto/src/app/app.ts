import { Component } from '@angular/core';
import { Carrusel } from './components/carrusel/carrusel';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Medicos } from './components/medicos/medicos';
import { BarraNavComponent } from './components/barra_nav/barra_nav';
import { Notificaciones } from './components/notificaciones/notificaciones';
import { Registro } from './components/registro/registro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Notificaciones, Header, BarraNavComponent, Carrusel, Medicos, Registro, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}