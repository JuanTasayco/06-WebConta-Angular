import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfpComponent } from './afp/afp.component';
import { PlameComponent } from './plame/plame.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'afp',
        component: AfpComponent,
      },
      {
        path: 'plame',
        component: PlameComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionalesRoutingModule {}
