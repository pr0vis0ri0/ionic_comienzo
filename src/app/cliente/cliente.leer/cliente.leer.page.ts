import { Component, OnInit } from '@angular/core';
import { IRegistro } from '../interface/registro';
import { ClienteService } from '../cliente.service';

// interface Registro {
//   nombres : string,
//   apellidos : string,
//   correo : string,
//   clave : string
// }

@Component({
  selector: 'app-cliente.leer',
  templateUrl: './cliente.leer.page.html',
  styleUrls: ['./cliente.leer.page.scss'],
})
export class ClienteLeerPage implements OnInit {

  constructor (private cliServ : ClienteService) { }

  msgError : string = '';
  buttonEliminarDisabled : boolean = false;
  buttonLeerDisabled : boolean = false;
  buttonActualizarDisabled : boolean = false;
  buttonCrearDisabled : boolean = false;
  public id : string = '';

  registro : IRegistro = {
    id : '',
    nombres : '',
    apellidos : '',
    correo : '',
    clave : ''
  }

  ngOnInit() {}

  leer () {
    this.registro = this.cliServ.leerServicio(this.id)
  }
  
  eliminar() {}
  grabar() {}
  actualizar() {}
  grabarActualizarAutomatico() {}

}
