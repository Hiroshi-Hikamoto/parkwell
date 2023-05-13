import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CocktailModule } from './cocktail/cocktail.module';
import { environment } from '../environments/environment';
import { LanguajeModule } from './languaje/languaje.module';
import { RouterModule, Routes } from '@angular/router';
import { languajeRoutingModule } from './languaje/languaje-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMovieComponent,
    MoviesComponent,
    EditMovieComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,    
    CocktailModule,
    LanguajeModule,
    AppRoutingModule,
    languajeRoutingModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
