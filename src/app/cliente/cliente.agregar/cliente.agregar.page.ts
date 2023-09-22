import { Component, OnInit } from '@angular/core';

interface Registro {
  nombres : string;
}

@Component({
  selector: 'app-cliente.agregar',
  templateUrl: './cliente.agregar.page.html',
  styleUrls: ['./cliente.agregar.page.scss'],
})
export class ClienteAgregarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
