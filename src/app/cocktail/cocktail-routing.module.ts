import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocktailListComponent } from './list/cocktail-list.component';
import { CocktailDetailComponent } from './detail/cocktail-detail.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: '',
            component: CocktailListComponent
        },
        {
            path: 'detalle/:id',
            component: CocktailDetailComponent
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CocktailRoutingModule { }
  