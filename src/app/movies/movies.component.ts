import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any = [];

  constructor(
    private movieService: MovieService
  ) {   
    this.list();
  }

  ngOnInit(): void {
  }

  list() {
    this.movieService.list().subscribe(res => {
      console.log(res);
      
      this.movies = [];
      res.forEach((val:any) => {

        this.movies.push({
          id: val.payload.doc.id,
          ...val.payload.doc.data()
        });
      });

      console.log('Películas', this.movies);
    });
  }

  delete(id: String) {
    console.log('Eliminar registro', id);
    
    Swal.fire({
      title: 'Eliminar película',
      text: "¿Está seguro que desea eliminar la película?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar'
    }).then((result) => {
        console.log(result);

        if (result.isConfirmed) {
          this.movieService.delete(id);
        }
    });
  }

}
