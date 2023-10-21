import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePropiedad } from '../interfaces/detalle_propiedad';
import { PropiedadesService } from '../services/propiedades.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  propiedadId! : string | null;

  constructor(public router : Router, public restApi: PropiedadesService, public loadingController : LoadingController, private route : ActivatedRoute) {
    this.propiedadId = ''
    const id = this.route.snapshot.paramMap.get('id');
  }

  d! : DetallePropiedad;

  ngOnInit() {
    this.propiedadId = this.route.snapshot.paramMap.get('id');
    if (this.propiedadId !== null) {
      this.getDetallePropiedad(parseInt(this.propiedadId));
    } else {
      this.propiedadId = '';
    }
  }
  
  async getDetallePropiedad(id : number) {
    console.log("Entrando :getDetallePropiedad")
    const loading = await this.loadingController.create({
      message : 'Buscando detalle propiedad...'
    })
    await loading.present()
    await this.restApi.devolverDetallePropiedad(id)
      .subscribe({
        next : (res) => {
          this.d = res;
          console.log("Detalle Propiedad : ", this.d)
          loading.dismiss()
        },
        complete : () => {},
        error : (err) => {
          console.log("Error : ", err)
          loading.dismiss()
        }
      })
  }
}
