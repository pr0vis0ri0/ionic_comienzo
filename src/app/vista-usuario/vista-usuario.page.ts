import { Component, OnInit} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PropiedadesService } from '../services/propiedades.service';
import { Propiedad, RegistroPropiedad, JwtPayload } from '../interfaces/interface';
import { jwtDecode } from 'jwt-decode'

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.page.html',
  styleUrls: ['./vista-usuario.page.scss'],
})
export class VistaUsuarioPage implements OnInit {
  propiedades: Propiedad[];
  propiedades_pendientes : Propiedad[];
  registro_propiedad: boolean = false; // Booleano que inicializa el modal de registro de propiedad de PrimeNG
  indexActivo: number = 0;
  idRegionSeleccionado : number = 0;
  idComunaSeleccionada : number = 0;
  regiones: any[] = [];
  comunas: any[] = [];
  reg_propiedad : RegistroPropiedad = {
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

  constructor(
    // private loading: LoadingController, 
    // private router: Router,
    private api: PropiedadesService
    ) { }

  ngOnInit() {
    this.propiedadesPendientes()
    this.buscarPropiedadesEjemplo()
    this.buscarRegiones()
    console.log(this.propiedadesPendientes())
  }
  
  async buscarPropiedadesEjemplo() {
    this.api.devolverListaPropiedades()
      .subscribe({
        next : (data) => {
          this.propiedades = data;
        }
      })
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
    this.reg_propiedad.id_comuna = this.idComunaSeleccionada;
  }

  showDialog() {
    this.registro_propiedad = true;
  }
  
  checkTipo() {
    
  }

  registrarPropiedad() {
    console.log(this.reg_propiedad)
    this.api.registrarPropiedadUsuario(this.reg_propiedad, localStorage.getItem('token') as string).subscribe({
      next : (data) => {
        console.log(data)
      },
      error : (error) => {
        console.log(error)
      },
      complete : () => {
        console.log('Completado')
      }
    })
  }

  async propiedadesPendientes() {
    this.api.devolverPropiedadesPendientesUsuario(this.idUsuarioDecode(), localStorage.getItem('token') as string)
      .subscribe({
        next : (data) => {
          this.propiedades_pendientes = data;
        }
      })
  }


  // @ViewChild('miModal', { static: false }) modal: IonModal;
  // name: string;
  // message: string = 'No ha ingresado ningún nombre';
  // cancel() {
  //   this.modal.dismiss(null, 'cancel');
  // }
  // confirm() {
  //   this.modal.dismiss(this.name, 'confirm');
  // }
  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }
}
