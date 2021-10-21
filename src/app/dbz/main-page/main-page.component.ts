import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }
  nuevo: Personaje = {
    nombre: 'Chaos',
    poder: 1000,
  };

  eliminar() {
    this.dbzService.removerPersonaje();
  }
  /* get personaje(): Personaje[] {
    return this.dbzService.personaje;
  }
  agregarNuevoPersonaje(pj: Personaje) {
    //bugger;
    this.personaje.push(pj);
  } */
}
