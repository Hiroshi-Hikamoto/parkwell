import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  name: String = '';
  description: String = '';

  constructor(
    private movieService: MovieService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  add() {
    console.log('Nombre', this.name);
    console.log('Descripción', this.description);

    this.movieService.add(this.name, this.description);
    this.toastr.success('Película agregada correctamente');

    this.name = '';
    this.description = '';
  }
}
