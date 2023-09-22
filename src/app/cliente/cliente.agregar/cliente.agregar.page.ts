import { Component, OnInit } from '@angular/core';

interface Registro {
  nombres: string;
  apellidos: string;
  correo: string;
  clave: string;
}

@Component({
  selector: 'app-cliente.agregar',
  templateUrl: './cliente.agregar.page.html',
  styleUrls: ['./cliente.agregar.page.scss'],
})
export class ClienteAgregarPage implements OnInit {
  registro : Registro = {
    nombres : '',
    apellidos : '',
    correo : '',
    clave : ''
  }

  constructor() { }

  ngOnInit() {
  }

  grabar () {}
}
