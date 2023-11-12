import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuRegPropiedadesPage } from './usu-reg-propiedades.page';

const routes: Routes = [
  {
    path: '',
    component: UsuRegPropiedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuRegPropiedadesPageRoutingModule {}
