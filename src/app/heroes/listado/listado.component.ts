import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  //styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Hulk',
    'Ironman',
    'Capitan America',
    'Thor',
  ];

  borrado = '';

  borrar(heroe: string[]) {
    console.log('Borrando.....');
    this.borrado = heroe.shift()?.toString() || '';
  }
}
