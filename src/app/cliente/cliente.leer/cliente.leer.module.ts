import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteLeerPageRoutingModule } from './cliente.leer-routing.module';

import { ClienteLeerPage } from './cliente.leer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteLeerPageRoutingModule
  ],
  declarations: [ClienteLeerPage]
})
export class ClienteLeerPageModule {}
