import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-carrusel',
  templateUrl: './carrusel.html'
})
export class Carrusel {
  imagenes = [
    { src: '/img/promo1.jpg', alt: 'Promo 1' },
    { src: '/img/promo2.jpg', alt: 'Promo 2' },
    { src: '/img/promo3.png', alt: 'Promo 3' },
  ];
}