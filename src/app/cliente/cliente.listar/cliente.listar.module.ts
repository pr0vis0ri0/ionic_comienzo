import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteListarPageRoutingModule } from './cliente.listar-routing.module';

import { ClienteListarPage } from './cliente.listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteListarPageRoutingModule
  ],
  declarations: [ClienteListarPage]
})
export class ClienteListarPageModule {}
