import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent  {

  id: String = '';
  name: String = '';
  description: String = '';

  constructor(
    activated: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private toastr: ToastrService
  ) {
    activated.params.subscribe((params: any) => {
      console.log('Parámetro', params);

      movieService.get(params.id).subscribe((res: any) => {
        console.log('Información película', res);

        this.id = params.id;
        this.name = res.name;
        this.description = res.description;
      });
    });
  }

  update() {
    this.toastr.success('Película actualizada correctamente');

    this.movieService.update(this.id, this.name, this.description);
    this.router.navigate(['/movies']);
  }

}
