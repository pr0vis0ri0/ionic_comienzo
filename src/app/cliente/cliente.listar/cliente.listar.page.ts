import { Component, OnInit } from '@angular/core';

interface Registro {
  id? : string;
  nombres: string;
  apellidos: string;
}

@Component({
  selector: 'app-cliente.listar',
  templateUrl: './cliente.listar.page.html',
  styleUrls: ['./cliente.listar.page.scss'],
})

export class ClienteListarPage implements OnInit {

  registros : Registro [] = 
  [ {id:"122",nombres:"Juan Gabriel",apellidos:"Picapiedras"},
    {id:"128",nombres:"Tito Gabril",apellidos:"Picapiedras"},
    {id:"129",nombres:"Ana Maria",apellidos:"Picapiedras"},
    {id:"1234",nombres:"Tortuelo Jaime",apellidos:"Picapiedras"},
    {id:"1223242",nombres:"El Gato",apellidos:"Picapiedras"},
    {id:"122324",nombres:"El Cocodrilo",apellidos:"Picapiedras"},
    {id:"12232",nombres:"Mario Jose",apellidos:"Picapiedras"},
    {nombres:"Sebas",apellidos:"Rebolledo"} ]

  constructor() { }

  ngOnInit() {
  }

  hasProp(o : Registro, name : keyof Registro) {
    return o.hasOwnProperty(name)
  }

}