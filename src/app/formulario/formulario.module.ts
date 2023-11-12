import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormularioPage } from './formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPageRoutingModule
  ],
  declarations: [FormularioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormularioPageModule {}
