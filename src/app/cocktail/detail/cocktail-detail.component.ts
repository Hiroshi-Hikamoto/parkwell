import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent {

  cocktail: any;

  constructor(
    private api: APIService,
    activated: ActivatedRoute,
    router: Router
  ) {

    activated.params.subscribe((params: any) => {

     this.api.cocktailDetail(params.id).subscribe({
        next: (data: any) => {

          if (data == null || data.drinks == null) {
            router.navigate(['coctel']);
          } else {

            // Asignar valor drink
            this.cocktail = data.drinks[0];

          }

        },
        error: error => {

        }
      });

    });


  }

}
