import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagInicioPage } from './PagInicio.page';

const routes: Routes = [
  {
    path: '',
    component: PagInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}