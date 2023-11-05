import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPropUsuPage } from './registro-prop-usu.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPropUsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPropUsuPageRoutingModule {}
