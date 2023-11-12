import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaUsuarioPageRoutingModule } from './vista-usuario-routing.module';

import { VistaUsuarioPage } from './vista-usuario.page';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaUsuarioPageRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    TabViewModule
  ],
  declarations: [VistaUsuarioPage]
})
export class VistaUsuarioPageModule {}
