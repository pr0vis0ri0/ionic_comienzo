import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VsadminPageRoutingModule } from './vsadmin-routing.module';

import { VsadminPage } from './vsadmin.page';
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
    VsadminPageRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    TabViewModule
  ],
  declarations: [VsadminPage]
})
export class VsadminPageModule {}
