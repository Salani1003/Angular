import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personaje: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 12000,
    },
    {
      nombre: 'Krillin',
      poder: 5000,
    },
    {
      nombre: 'Picoro',
      poder: 10000,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Chaos',
    poder: 1000,
  };

  agregarNuevoPersonaje(pj: Personaje) {
    debugger;
    this.personaje.push(pj);
  }
}
