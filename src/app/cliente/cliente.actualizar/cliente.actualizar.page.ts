import { Component, OnInit } from '@angular/core';
import { IRegistro } from '../interface/registro';
import { ClienteService } from '../cliente.service';

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
  registro : IRegistro = {
    id : '',
    nombres : '',
    apellidos : '',
    correo : '',
    clave : ''
  }

  constructor(private cliServ : ClienteService) { }

  ngOnInit() {
  }

  actualizarRegistro() {
    this.cliServ.actualizarServicio(this.registro)
  }

}
