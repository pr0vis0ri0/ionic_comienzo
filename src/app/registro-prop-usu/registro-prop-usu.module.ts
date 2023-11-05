import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPropUsuPageRoutingModule } from './registro-prop-usu-routing.module';

import { RegistroPropUsuPage } from './registro-prop-usu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPropUsuPageRoutingModule
  ],
  declarations: [RegistroPropUsuPage]
})
export class RegistroPropUsuPageModule {}
