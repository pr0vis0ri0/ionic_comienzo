import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropiedadesPage } from './propiedades.page';

const routes: Routes = [
  {
    path: '',
    component: PropiedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropiedadesPageRoutingModule {}
