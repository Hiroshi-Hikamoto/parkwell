import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { LanguajeModule } from './languaje.module';

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'add',
            component: AddComponent
        },
        {
            path: 'edit',
            component: EditComponent
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class languajeRoutingModule { }