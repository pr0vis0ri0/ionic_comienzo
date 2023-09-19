import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  txUsuario : string ='';
	txClave : string = '';
	txWeb : string = '';
	txMail : string = '';
	txTeleFono : string = '';
  txEdad : string = '';
	txPropaganda : string = '';
	txNotificaciones : string = '';
	msg : string = '';
  constructor() { }
  ngOnInit() {
  }

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
