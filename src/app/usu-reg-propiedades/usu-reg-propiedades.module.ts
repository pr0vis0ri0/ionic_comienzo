import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuRegPropiedadesPageRoutingModule } from './usu-reg-propiedades-routing.module';

import { UsuRegPropiedadesPage } from './usu-reg-propiedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuRegPropiedadesPageRoutingModule
  ],
  declarations: [UsuRegPropiedadesPage]
})
export class UsuRegPropiedadesPageModule {}
