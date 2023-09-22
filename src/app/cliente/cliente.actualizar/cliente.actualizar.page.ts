import { Component, OnInit } from '@angular/core';

interface Registro {
  nombres: string;
  apellidos: string;
  correo: string;
  clave: string;
}

@Component({
  selector: 'app-cliente.actualizar',
  templateUrl: './cliente.actualizar.page.html',
  styleUrls: ['./cliente.actualizar.page.scss'],
})
export class ClienteActualizarPage implements OnInit {
  id : string = "5"
  registro : Registro = {
    nombres : '',
    apellidos : '',
    correo : '',
    clave : ''
  }

  constructor() { }

  ngOnInit() {
  }

  grabar() {}

}
