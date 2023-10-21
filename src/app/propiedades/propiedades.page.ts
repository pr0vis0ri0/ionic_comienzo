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

  constructor(public router : Router, public restApi: PropiedadesService, public loadingController : LoadingController) { }

  ngOnInit() {
    this.getPropiedades();
  }
  propiedades : Propiedades[] = []

  async getPropiedades() {
    console.log("Entrando :getPropiedades")
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

  verDetallePropiedad(id : number) {
    this.router.navigate(['/detalle_propiedad', id]);
  }
}
