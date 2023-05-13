import { AddComponent } from './languaje/add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'add',
    component: AddMovieComponent
  },
  {
    path: 'edit/:id',
    component: EditMovieComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'coctel',
    loadChildren: () => import('./cocktail/cocktail.module').then(m => m.CocktailModule)
  },
  {
    path: 'languaje',
    loadChildren: () => import('./languaje/languaje.module').then(m => m.LanguajeModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
