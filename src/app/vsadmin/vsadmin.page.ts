import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../services/propiedades.service';
import { jwtDecode } from 'jwt-decode'
import { LoadingController } from '@ionic/angular';
import {JwtPayload,AdmPropiedadBase, Propiedad, TodasPropiedades, EstadoPropiedad } from '../interfaces/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vsadmin',
  templateUrl: './vsadmin.page.html',
  styleUrls: ['./vsadmin.page.scss'],
})
export class VsadminPage implements OnInit {

  constructor(public api: PropiedadesService ,  private loading: LoadingController, ) { }
  propiedades_pendientes : AdmPropiedadBase[] = [];
  todas_propiedades: TodasPropiedades[] = [];
  estado_carga_pendientes : boolean = false;
  estado_carga_prop : boolean = false;
  
  visualizacion_propiedad : boolean = false;
  modal_propiedad_1: boolean = false;
  modal_propiedad_2 : boolean = false;
  indexActivo: number = 0;
   
  ngOnInit() {
    this.loadPropiedadesRevision();
    this.loadBasePropiedades();
  }
  
  vs: AdmPropiedadBase = {
    id_propiedad: 0,
    valor_propiedad: 0,
    es_arriendo: true,
    es_venta: false,
    descripcion_estado: '',
    nombre_tipo_propiedad: '',
    nombre_comuna: '',
    nombre_region: '',
    metros_totales: 0,
    metros_utiles: 0,
    cant_dormitorios: 0,
    cant_banos: 0,
    permite_mascotas: false,
    tiene_bodega: false,
    tiene_estacionamiento: false,
    nombre_usuario: ''
  };

  vss: TodasPropiedades = {
    id_propiedad: 0,
    valor_propiedad: 0,
    es_arriendo: false,
    es_venta: false,
    descripcion_estado: '',
    nombre_tipo_propiedad: '',
    metros_totales: 0,
    metros_utiles: 0,
    cant_dormitorios: 0,
    cant_banos: 0,
    permite_mascotas: false,
    tiene_bodega: false,
    tiene_estacionamiento: false,
    nombre_comuna: '',
    nombre_region: '',
    nombre_usuario: '',
  };

  updPropiedad : EstadoPropiedad;

  devolverToken(): string | null {
    return localStorage.getItem('token');
  }

  idUsuarioDecode(): any {
    const token = this.devolverToken();
    let id_user: number | null;
    const decoded = jwtDecode<JwtPayload>(token as string);
    id_user = decoded.id_usuario as number;
    return id_user;
  }

  async viewPropPendiente(id_propiedad: number) {
    let registro : any  = this.propiedades_pendientes.find((element)=>element.id_propiedad==id_propiedad);
    this.vs = registro;
    const loading = await this.loading.create({
      message: 'Buscando información de la propiedad seleccionada...'
    })
    await loading.present()
    loading.message = 'Información encontrada.'
    loading.dismiss()
    this.modal_propiedad_1 = true;
  }
  
  async viewPropPendienteM(id_propiedad : number) {
    let registro : any  = this.todas_propiedades.find((element)=>element.id_propiedad==id_propiedad);
    this.vss = registro;
    const loading = await this.loading.create({
      message: 'Buscando información de la propiedad seleccionada...'
    })
    await loading.present()
    loading.message = 'Información encontrada.'
    loading.dismiss()
    this.modal_propiedad_2 = true;
  }

  async loadPropiedadesRevision() {
    this.api.devolverpropiedadesrevision(this.idUsuarioDecode(), localStorage.getItem('token') as string)
      .subscribe({
        next : (data:any) => {
          // console.log(data)
           if (data.hasOwnProperty('status') && data.status == 404) {
             console.log('Error 404, no existen registros.')
             this.estado_carga_pendientes = false;
           } else {
             this.propiedades_pendientes = Array.isArray(data) ? data : [data];
             this.estado_carga_pendientes = true;
           }
        },
        error : (error) => {
          this.estado_carga_pendientes = false;
          console.log(error)
        },
        complete : () => {
          // console.log('metodo' , this.propiedades_pendientes)
          console.log('Completada la devolución de propiedades pendientes por usuario.')
        }
      })
  }
  async loadBasePropiedades() {
    this.api.devolverDetalletodasprop(this.idUsuarioDecode(), localStorage.getItem('token') as string)
      .subscribe({
        next : (data:any) => {
          console.log(data)
           if (data.hasOwnProperty('status') && data.status == 404) {
             console.log('Error 404, no existen registros.')
             this.estado_carga_prop = false;
           } else {
             this.todas_propiedades = Array.isArray(data) ? data : [data];
             this.estado_carga_prop = true;
           }
        },
        error : (error) => {
          this.estado_carga_prop = false;
          console.log(error)
        },
        complete : () => {
          console.log('metodo' , this.todas_propiedades)
          console.log('Completada la devolución de propiedades pendientes por usuario.')
        }
      })
  }

  async validarPropiedad(id_propiedad : number){
    this.updPropiedad = {
      id_usuario : this.idUsuarioDecode(),
      id_propiedad : id_propiedad,
      ultimo_estado : 2,
      observacion_denegacion : ''
    }
    const loading = await this.loading.create({
      message: 'Actualizando propiedad...'
    })
    loading.present()
    this.api.cambiarEstadoPropiedad(this.updPropiedad, localStorage.getItem('token') as string)
      .subscribe({
        next : (r) => {
          // console.log(r)
          loading.message = "Propiedad validada."
          loading.dismiss()
          location.reload()
        },
        error : (e) => {
          console.log(e)
        },
        complete : () => {

        }
      })
  }

  async denegarPropiedad(id_propiedad : number){
    this.updPropiedad = {
      id_usuario : this.idUsuarioDecode(),
      id_propiedad : id_propiedad,
      ultimo_estado : 3,
      observacion_denegacion : 'Se denegó la propiedad.'
    }
    const loading = await this.loading.create({
      message: 'Actualizando propiedad...'
    })
    loading.present()
    this.api.cambiarEstadoPropiedad(this.updPropiedad, localStorage.getItem('token') as string)
      .subscribe({
        next : (r) => {
          // console.log(r)
          loading.message = "Propiedad denegada."
          loading.dismiss()
          location.reload()
        },
        error : (e) => {
          console.log(e)
        },
        complete : () => {
          
        }
      })
  }

}
