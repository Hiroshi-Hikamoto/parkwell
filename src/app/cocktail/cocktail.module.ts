import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { CocktailListComponent } from './list/cocktail-list.component';
import { CocktailDetailComponent } from './detail/cocktail-detail.component';

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailComponent
  ],
  imports: [
    CocktailRoutingModule,
    FormsModule,  
    CommonModule
  ]
})
export class CocktailModule { }
