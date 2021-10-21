import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{ title }}</h1>

    <hr />
    <span>Contador con dos funciones</span>
    <button (click)="sumar()">+</button>
    <span>{{ contador }} </span>
    <button (click)="restar()">-</button>

    <hr />
    <span>Contador con una funcion</span>
    <button (click)="acumular(1)">+</button>
    <span>{{ contador2 }}</span>
    <button (click)="acumular(-1)">-</button>
    <hr />

    <span>La base es : {{ base }}</span>
    <button (click)="sumarBase(base)">+{{ base }}</button>
    <button (click)="sumarBase(-base)">-{{ base }}</button>
    <span>Acumulador : {{ numero }}</span> `,
})
export class ContadorComponent {
  title: string = 'Hola Mundo, estoy re loco';
  contador: number = 0;
  contador2: number = 0;
  base: number = 5;
  numero: number = 0;
  sumar() {
    this.contador++;
  }
  restar() {
    this.contador--;
  }

  acumular(valor: number) {
    this.contador2 += valor;
  }
  sumarBase(valor: number) {
    this.numero += valor;
  }
}
