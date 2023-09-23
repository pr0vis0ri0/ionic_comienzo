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

  registro = this.clivServ.getRegistrosReferencia

  // registros : Registro [] = 
  // [ {id:"122",nombres:"Juan Gabriel",apellidos:"Picapiedras"},
  //   {id:"128",nombres:"Tito Gabril",apellidos:"Picapiedras"},
  //   {id:"129",nombres:"Ana Maria",apellidos:"Picapiedras"},
  //   {id:"1234",nombres:"Tortuelo Jaime",apellidos:"Picapiedras"},
  //   {id:"1223242",nombres:"El Gato",apellidos:"Picapiedras"},
  //   {id:"122324",nombres:"El Cocodrilo",apellidos:"Picapiedras"},
  //   {id:"12232",nombres:"Mario Jose",apellidos:"Picapiedras"},
  //   {nombres:"Sebas",apellidos:"Rebolledo"} ]

  constructor(private clivServ: ClienteService, public clivServPublic: ClienteService) {
    // this.registro = this.clivServ.getRegistrosReferencia
    // this.registro.push({
    //   id : "10",
    //   nombres : "M10",
    //   apellidos : "P10",
    //   correo : "x@uc.cl",
    //   clave : "1134"
    // })
    console.log("Registro de referencia: " , this.clivServ.getRegistrosReferencia)

    // this.registro = this.clivServ.getRegistrosCopia
    // this.registro.push({
    //   id : "20",
    //   nombres : "M20",
    //   apellidos : "P20",
    //   correo : "x@uc.cl",
    //   clave : "1134"
    // })
    // console.log("Registro copiado: ", this.registro)

    // this.registro = this.clivServ.getRegistroMetodo()
    // this.registro.push({
    //   id : "30",
    //   nombres : "M30",
    //   apellidos : "P30",
    //   correo : "x@uc.cl",
    //   clave : "1134"
    // })
    // console.log("Registro referenciado a través de método: ", this.registro)
  }

  get getRegistros() : IRegistro[] {
    return this.clivServ.getRegistrosReferencia
  }

  getRegistrosMetodo() : IRegistro[] {
    return this.clivServ.getRegistrosCopia
  }

  ngOnInit() {
  }

  hasProp(o : Registro, name : keyof Registro) {
    return o.hasOwnProperty(name)
  }

  hasPropInterface(o : IRegistro, name : keyof IRegistro) {
    return o.hasOwnProperty(name)
  }

}