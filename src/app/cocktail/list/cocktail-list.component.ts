import { Component } from '@angular/core';

import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {

  cocktails: any = [];

  keyword: string = '';

  loading: boolean = false;

  info: any = null;

  constructor(
    private api: APIService
  ) {
    this.search();
  }

  search() {
    console.log('Buscar', this.keyword);

    this.loading = true;
    this.api.cocktailList(this.keyword).subscribe(
      {
        next: (data: any) => {
          
          if (data.drinks == null) {
            this.info = 'No se encontraron registros';
            this.cocktails = [];
          } else {
            this.cocktails = data.drinks;
            console.log('Cócteles', this.cocktails);
            this.info = null;
          }

          this.loading = false;
        }, 
        error: error => this.loading = false
      }
    ); 
  }
  
}
