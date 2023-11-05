import { Component, OnInit,ViewChild } from '@angular/core';
import { IonCheckbox, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-registro-prop-usu',
  templateUrl: './registro-prop-usu.page.html',
  styleUrls: ['./registro-prop-usu.page.scss'],
})
export class RegistroPropUsuPage{


  @ViewChild(IonModal) modal: IonModal;
  message = 'Presione el boton "Abrir Formulario".';
  nombrep: string;
  estadopropiedad:string;
  valorpropiedad:number;
  tpropiedad:string;
  region:string;
  comuna:string;


  constructor() { }

  


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.nombrep, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = ` ${ev.detail.data} se ha registrado su propiedad!`;
    }
  }
}
