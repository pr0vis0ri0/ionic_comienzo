import { Component, OnInit} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PropiedadesService } from '../services/propiedades.service';
import { Propiedad, RegistroPropiedad, JwtPayload, DetallePropiedad } from '../interfaces/interface';
import { jwtDecode } from 'jwt-decode'
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.page.html',
  styleUrls: ['./vista-usuario.page.scss'],
})
export class VistaUsuarioPage implements OnInit {
  propiedades_pendientes : Propiedad[] = [];
  propiedades_validadas: Propiedad[] = [] // Array para almacenar las propiedades pendientes de aprobación
  registro_propiedad: boolean = false; // Booleano que inicializa el modal de registro de propiedad de PrimeNG
  visualizacion_propiedad : boolean = false;
  indexActivo: number = 0; // Index del tab del modal de registro de propiedad de PrimeNG
  idRegionSeleccionado : number = 0;
  idComunaSeleccionada : number = 0;
  regiones: any[] = [];
  comunas: any[] = [];
  rp : RegistroPropiedad = {
    id_usuario: this.idUsuarioDecode(),
    valor_propiedad: 0,
    es_arriendo: false,
    es_venta: false,
    id_tipo_propiedad: 0,
    id_comuna: 0,
    metros_totales: 0,
    metros_utiles: 0,
    cant_dormitorios: 0,
    cant_banos: 0,
    permite_mascotas: false,
    tiene_bodega: false,
    tiene_estacionamiento: false
  }
  vp : DetallePropiedad = {
    id_propiedad: 0,
    valor_propiedad: 0,
    es_arriendo: true,
    es_venta: false,
    nombre_tipo_propiedad: '',
    nombre_comuna: '',
    nombre_region: '',
    metros_totales: 0,
    metros_utiles: 0,
    cant_dormitorios: 0,
    cant_banos: 0,
    permite_mascotas: false,
    tiene_bodega: false,
    tiene_estacionamiento: false
  }
  estado_carga_pendientes : boolean = false;
  estado_carga_base : boolean = false;
  // hazme un array con dos objetos, aleatorios
  arr : any = [
    {
      id_propiedad: 0,
      valor_propiedad: 0,
      es_arriendo: true,
      es_venta: false,
      nombre_tipo_propiedad: '',
      nombre_comuna: '',
      nombre_region: '',
      metros_totales: 0,
      metros_utiles: 0,
      cant_dormitorios: 0,
      cant_banos: 0,
      permite_mascotas: false,
      tiene_bodega: false,
      tiene_estacionamiento: false
    },
    {
      id_propiedad: 0,
      valor_propiedad: 0,
      es_arriendo: true,
      es_venta: false,
      nombre_tipo_propiedad: '',
      nombre_comuna: '',
      nombre_region: '',
      metros_totales: 0,
      metros_utiles: 0,
      cant_dormitorios: 0,
      cant_banos: 0,
      permite_mascotas: false,
      tiene_bodega: false,
      tiene_estacionamiento: false
    }
  ]
  constructor(
    private loading: LoadingController, 
    private router: Router,
    private api: PropiedadesService
    ) { }

  ngOnInit() {
    this.propiedadesPendientes()
    this.propiedadesValidadas()
    this.buscarRegiones()
  }

  async buscarRegiones() {
    this.api.devolerRegiones().subscribe({
      next : (region) => {
        this.regiones = region;
      }
    })
  }

  devolverToken() : string | null {
    return localStorage.getItem('token');
  }

  idUsuarioDecode() : any {
    const token = this.devolverToken();
    let id_user : number | null;
    const decoded = jwtDecode<JwtPayload>(token as string);
    id_user = decoded.id_usuario as number;
    return id_user
  }

  buscarComunas() {
    this.api.devolverComunas(this.idRegionSeleccionado).subscribe({
      next : (comuna) => {
        this.comunas = comuna;
      }
    })
  }

  cambioComuna() {
    this.rp.id_comuna = this.idComunaSeleccionada;
  }

  modalRegistroPropiedad() {
    this.registro_propiedad = true;
  }

  async viewPropPendiente(id_propiedad : number) {
    const loading = await this.loading.create({
      message: 'Buscando información de la propiedad seleccionada...'
    })
    await loading.present()
    await this.api.devolverDetallePropiedadesPendientesUsuario(this.idUsuarioDecode(), id_propiedad, localStorage.getItem('token') as string)
      .subscribe({
        next : (d) => {
          this.vp = d;
          console.log(d)
        },
        error : (e) => {
          console.log(e)
        },
        complete : () => {
          loading.message = 'Información encontrada.'
          loading.dismiss()
          this.visualizacion_propiedad = true;
        }
      })
  }
  
  async viewPropValidada(id_propiedad : number) {
    const loading = await this.loading.create({
      message: 'Buscando información de la propiedad seleccionada...'
    })
    await loading.present()
    await this.api.detailBPropUsuario(this.idUsuarioDecode(), id_propiedad, localStorage.getItem('token') as string)
      .subscribe({
        next : (d) => {
          this.vp = d;
          console.log(d)
        },
        error : (e) => {
          console.log(e)
        },
        complete : () => {
          loading.message = 'Información encontrada.'
          loading.dismiss()
          this.visualizacion_propiedad = true;
        }
      })
  }

  checkTipo() {
    
  }

  registrarPropiedad() {
    this.api.registrarPropiedadUsuario(this.rp, localStorage.getItem('token') as string).subscribe({
      next : (data) => {
      },
      error : (error) => {
      },
      complete : () => {
      }
    })
  }

  async propiedadesPendientes() {
    this.api.devolverPropiedadesPendientesUsuario(this.idUsuarioDecode(), localStorage.getItem('token') as string)
      .subscribe({
        next : (data : any) => {
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
          console.log(this.propiedades_pendientes)
          console.log('Completada la devolución de propiedades pendientes por usuario.')
        }
      })
  }

  async propiedadesValidadas() {
    this.api.listaBPropUsuario(this.idUsuarioDecode(), localStorage.getItem('token') as string)
    .subscribe({
      next : (data : any) => {
        if (data.hasOwnProperty('status') && data.status == 404) {
          console.log('Error 404, no existen registros.')
          this.estado_carga_base = false;
        } else {
          this.propiedades_validadas = Array.isArray(data) ? data : [data];
          this.estado_carga_base = true;
        }
      },
      error : (e) => {
        this.estado_carga_base = false;
        console.log(e)
      },
      complete : () => {
        console.log(this.propiedades_validadas)
        console.log('Completada la devolución de propiedades validadas por usuario')
      }
    })
  }
}
