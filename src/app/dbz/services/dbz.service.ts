import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personaje: Personaje[] = [
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

  get personajes(): Personaje[] {
    return [...this._personaje];
  }
  constructor() {
    console.log('Servicio Inicializado');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personaje.push(personaje);
  }
  removerPersonaje() {
    this._personaje.pop();
  }
}
