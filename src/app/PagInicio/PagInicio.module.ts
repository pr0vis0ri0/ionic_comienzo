import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './PagInicio-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PagInicioPage } from './PagInicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  declarations: [PagInicioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagInicioPageModule {}