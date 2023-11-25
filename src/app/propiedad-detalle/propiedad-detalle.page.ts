import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DetallePropiedad } from '../interfaces/interface';
import { PropiedadesService } from '../services/propiedades.service';
import { TransbankService } from '../services/transbank.service';

@Component({
  selector: 'app-propiedad-detalle',
  templateUrl: './propiedad-detalle.page.html',
  styleUrls: ['./propiedad-detalle.page.scss'],
})
export class PropiedadDetallePage implements OnInit {
  propiedadId! : string | null;

  constructor(
    public router : Router, 
    public restApi: PropiedadesService,
    public transbankApi: TransbankService,
    public loadingController : LoadingController, 
    private route : ActivatedRoute
  ) {
    this.propiedadId = ''
    const id = this.route.snapshot.paramMap.get('id');
  }

  d! : DetallePropiedad;

  ngOnInit() {
    this.checkToken()
    this.propiedadId = this.route.snapshot.paramMap.get('id');
    if (this.propiedadId !== null) {
      this.getDetallePropiedad(parseInt(this.propiedadId));
    } else {
      this.router.navigate(['/propiedades'])
    }
  }

  async checkToken() {
    const token = localStorage.getItem('token')
    if (token == null) {
      this.router.navigate(['/login']);
    }
  }
  
  async getDetallePropiedad(id : number) {
    const loading = await this.loadingController.create({
      message : 'Buscando detalle propiedad...'
    })
    await loading.present()
    await this.restApi.devolverDetallePropiedad(id)
      .subscribe({
        next : (res) => {
          this.d = res;
          loading.dismiss()
        },
        complete : () => {},
        error : (err) => {
          console.log("Error : ", err)
          loading.dismiss()
        }
      })
  }

  async pagarReserva() {
    const loading = await this.loadingController.create({
      message : 'Pagando reserva...'
    })
    await loading.present()
    await 
    this.transbankApi.crearTransaccion()
      .subscribe({
        next : (res) => {
          console.log("Transaccion : ", res)
          loading.dismiss()
          console.log(res.url)
          console.log(res.token)
          console.log(res.url + '?token_ws=' + res.token)
          localStorage.setItem('token',res.token)
          window.location.href= res.url + '?token_ws=' + res.token
        },
        complete : () => {},
        error : (err) => {
          console.log("Error : ", err)
          loading.dismiss()
        }
      })
  }

}
