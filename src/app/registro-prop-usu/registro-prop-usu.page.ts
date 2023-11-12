import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public ContactForm = new FormGroup({
    nombrep: new FormControl ('',[Validators.required, ]),
    estadopropiedad: new FormControl('',[Validators.required]),
    valorpropiedad: new FormControl('',[Validators.required]),
    tpropiedad: new FormControl('',[Validators.required]),
    region: new FormControl('',[Validators.required]),
    comuna: new FormControl('',[Validators.required]),
  });


  constructor() { }

  
  enviar(){
  }

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
