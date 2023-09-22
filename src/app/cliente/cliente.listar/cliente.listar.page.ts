import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { IRegistro } from '../interface/registro';

// Puede que esto lo comente ya que ahora tengo la interface importada desde el registro.ts
interface Registro {
  id? : string,
  nombres: string,
  apellidos: string,
  correo? : string,
  clave? : string
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

  constructor(private clivServ: ClienteService, public clivServPublic: ClienteService) { }

  registro = this.clivServ.getRegistrosReferencia

  ngOnInit() {
  }

  hasProp(o : Registro, name : keyof Registro) {
    return o.hasOwnProperty(name)
  }

}