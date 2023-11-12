import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPropUsuPageRoutingModule } from './registro-prop-usu-routing.module';

import { RegistroPropUsuPage } from './registro-prop-usu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPropUsuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPropUsuPage]
})
export class RegistroPropUsuPageModule {}
