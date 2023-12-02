import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropiedadDetallePageRoutingModule } from './propiedad-detalle-routing.module';

import { PropiedadDetallePage } from './propiedad-detalle.page';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropiedadDetallePageRoutingModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule
  ],
  declarations: [PropiedadDetallePage]
})
export class PropiedadDetallePageModule {}
