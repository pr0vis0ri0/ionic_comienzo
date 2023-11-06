import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Propiedades } from '../interfaces/propiedades';
import { PropiedadesService } from '../services/propiedades.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.page.html',
  styleUrls: ['./propiedades.page.scss'],
})
export class PropiedadesPage implements OnInit {

  constructor(public router : Router,  public restApi: PropiedadesService, public loadingController : LoadingController) {}

  propiedades : Propiedades[] = []
  regiones : any[] = []
  comunas: any[] = []
  IdRegionSeleccionado : number = 0;

  // Para filtros
  id_comuna : number = 0
  valor_desde : number = 0
  valor_hasta: number = 0
  es_arriendo : boolean = false
  es_venta : boolean = false

  ngOnInit() {
    this.checkToken()
    this.getRegiones()
    this.getPropiedades()
  }

  checkToken() {
    const token = localStorage.getItem('token')
    if (token == null) {
      this.router.navigate(['/login']);
    }
  }

  async getPropiedades() {
    const loading = await this.loadingController.create({
      message : 'Buscando propiedades...'
    })
    await loading.present()
    await this.restApi.devolverListaPropiedades()
      .subscribe({
        next : (res) => {
          this.propiedades = res;
          loading.dismiss()
        },
        complete : () => {},
        error : (err) => {
          console.log("Error : ", err)
          loading.dismiss()
        }
      })
  }

  getRegiones() {
    this.restApi.devolerRegiones().subscribe({
      next : (region) => {
        this.regiones = region;
      }
    })
  }

  buscarComunas() {
    this.restApi.devolverComunas(this.IdRegionSeleccionado).subscribe({
      next : (comuna) => {
        this.comunas = comuna;
      }
    })
  }

  filtrarPropiedades() {
    this.restApi.devolverPropiedadesFiltradas(this.id_comuna, this.valor_desde, this.valor_hasta, this.es_arriendo, this.es_venta).subscribe({
      next : (resultado) => {
        if (resultado && typeof resultado === 'object' && !(resultado instanceof Array)) {
          this.propiedades = [resultado];
        } else {
          this.propiedades = resultado;
        }
      }
    })
  }
  
  verDetallePropiedad(id : number) {
    this.router.navigate(['/detalle_propiedad', id]);
  }
}
