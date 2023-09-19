import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListarPage } from './cliente.listar.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteListarPageRoutingModule {}
