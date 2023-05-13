import { languajeRoutingModule } from './languaje-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    languajeRoutingModule
  ]
})
export class LanguajeModule { }
