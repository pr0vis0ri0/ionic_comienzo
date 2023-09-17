import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  txUsuario : string ='';
	txClave : string = '';
	txWeb : string = '';
	txMail : string = '';
	txTeleFono : string = '';
  txEdad : string = '';
	txPropaganda : string = '';
	txNotificaciones : string = '';
	msg : string = '';

  funActualizar(){
    this.msg = 'Usuario : ' + this.txUsuario + '<br>'
              + 'Clave : ' + this.txClave + ' <br>'
              + 'Web : ' + this.txWeb + '<br>'
              + 'Mail : ' + this.txMail + '<br>'
              + 'Fono : ' + this.txTeleFono + '<br>'
              + 'Propaganda : ' + this.txPropaganda + '<br>'
              + 'Notificaciones : ' + this.txNotificaciones + '<br>';
  }
}
