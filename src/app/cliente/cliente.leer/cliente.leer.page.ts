import { Component, OnInit } from '@angular/core';

interface Registro {
  nombres : string,
  apellidos : string,
  correo : string,
  clave : string
}

@Component({
  selector: 'app-cliente.leer',
  templateUrl: './cliente.leer.page.html',
  styleUrls: ['./cliente.leer.page.scss'],
})
export class ClienteLeerPage implements OnInit {

  msgError : string = '';
  buttonEliminarDisabled : boolean = false;
  buttonLeerDisabled : boolean = false;
  buttonActualizarDisabled : boolean = false;
  buttonCrearDisabled : boolean = false;
  public id : string = '';

  registro : Registro = {
    nombres : '',
    apellidos : '',
    correo : '',
    clave : ''
  }
  
  constructor() {}
  ngOnInit() {}
  leer () {}
  eliminar() {}
  grabar() {}
  actualizar() {}
  grabarActualizarAutomatico() {}

}
