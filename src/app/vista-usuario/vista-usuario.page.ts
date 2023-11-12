import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core/components';
import { PropiedadesService } from '../services/propiedades.service';
import { Propiedad } from '../interfaces/interface';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.page.html',
  styleUrls: ['./vista-usuario.page.scss'],
})
export class VistaUsuarioPage implements OnInit {
  propiedades: Propiedad[];
  registro_propiedad: boolean = false; // Booleano que inicializa el modal de registro de propiedad de PrimeNG
  indexActivo: number = 0;
  idRegionSeleccionado : number = 0;
  idComunaSeleccionada : number = 0;
  regiones: any[] = [];
  comunas: any[] = [];

  constructor(
    // private loading: LoadingController, 
    // private router: Router,
    private api: PropiedadesService
    ) { }

  ngOnInit() {
    this.buscarPropiedadesEjemplo()
    this.buscarRegiones()
  }

  async buscarPropiedadesEjemplo() {
    this.api.devolverListaPropiedades()
      .subscribe({
        next : (data) => {
          this.propiedades = data;
        }
      })
  }

  buscarRegiones() {
    this.api.devolerRegiones().subscribe({
      next : (region) => {
        this.regiones = region;
      }
    })
  }

  buscarComunas() {
    this.api.devolverComunas(this.idRegionSeleccionado).subscribe({
      next : (comuna) => {
        this.comunas = comuna;
      }
    })
  }

  showDialog() {
    this.registro_propiedad = true;
  }
  
  checkTipo() {
    
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
