import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { IRegistro } from '../interface/registro';

// interface Registro {
//   nombres: string;
//   apellidos: string;
//   correo: string;
//   clave: string;
// }

@Component({
  selector: 'app-cliente.agregar',
  templateUrl: './cliente.agregar.page.html',
  styleUrls: ['./cliente.agregar.page.scss'],
})
export class ClienteAgregarPage implements OnInit {
  registro : IRegistro = {
    id : '',
    nombres : '',
    apellidos : '',
    correo : '',
    clave : ''
  }

  constructor(private cliServ: ClienteService) { }

  ngOnInit() {
  }

  grabar () {
    this.cliServ.agregarServicio(this.registro)
  }
}
