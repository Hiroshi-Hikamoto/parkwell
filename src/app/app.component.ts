import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  movies = [
    {
      id: 1,
      name: 'La mascara' 
    },
    {
      id: 2,
      name: 'Volver al futuro' 
    },
    {
      id: 3,
      name: 'Rápido y furioso' 
    },
    {
      id: 4,
      name: 'Rápido y furioso 2' 
    },
    {
      id: 5,
      name: 'Rápido y furioso 5' 
    },
    {
      id: 6,
      name: 'Rápido y furioso 6' 
    },
    {
      id: 70,
      name: 'Rápido y furioso 7' 
    }
  ];
}
