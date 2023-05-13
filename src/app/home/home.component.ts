
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  movies: any = [];

  constructor(
    http: HttpClient,
    private toastr: ToastrService
  ) { 
    http.get('https://ibasoft.com.co/movies')
      .subscribe(
        {
          next: data => {
            console.log(data);
            this.movies = data;

            this.toastr.success('Listado de películas cargadas', 'Películas');
          },
          error: (error) => {
            this.toastr.error('Se produjo un error al cargar la información', 'Películas');
            console.log('Error al consumir servicio', error);
            
          }
        }
      )
  }
}
