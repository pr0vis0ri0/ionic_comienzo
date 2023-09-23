import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { IRegistro } from '../interface/registro';

@Component({
  selector: 'app-cliente.eliminar',
  templateUrl: './cliente.eliminar.page.html',
  styleUrls: ['./cliente.eliminar.page.scss'],
})
export class ClienteEliminarPage implements OnInit {

  id : string = ''

  constructor(private cliServ : ClienteService) { }

  ngOnInit() { }

  eliminarRegistro() {
    this.cliServ.eliminarServicio(this.id)
  }
}
