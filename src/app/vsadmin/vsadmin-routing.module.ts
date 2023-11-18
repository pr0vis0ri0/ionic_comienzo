import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VsadminPage } from './vsadmin.page';

const routes: Routes = [
  {
    path: '',
    component: VsadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VsadminPageRoutingModule {}
